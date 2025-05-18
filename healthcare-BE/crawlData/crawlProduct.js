const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const BASE_URL = "https://hebekery.vn";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getHTML(url) {
  const res = await axios.get(url);
  return cheerio.load(res.data);
}

async function extractInitialLinks() {
  const $ = await getHTML(BASE_URL);
  const links = [];

  $("ul.lv1 a").each((_, el) => {
    const href = $(el).attr("href");
    if (href) {
      const fullUrl = href.startsWith("http") ? href : BASE_URL + href;
      links.push(fullUrl);
    }
  });

  return links;
}

async function extractLinksFromPage(url) {
  try {
    const $ = await getHTML(url);
    const pageLinks = [];

    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (href) {
        const fullHref = href.startsWith("http") ? href : BASE_URL + href;
        pageLinks.push(fullHref);
      }
    });

    return pageLinks;
  } catch (err) {
    console.error(`❌ Lỗi khi truy cập ${url}: ${err.message}`);
    return [];
  }
}

// Tạo phân loại ngẫu nhiên cho sản phẩm
function generateRandomClassifications() {
  const weightOptions = ["50gr", "100gr", "150gr", "200gr", "250gr", "300gr", "500gr"];
  const count = Math.floor(Math.random() * 2) + 2; // Random 2-3 phân loại
  
  const selectedClassifications = [];
  const usedIndices = new Set();
  
  while (selectedClassifications.length < count) {
    const randomIndex = Math.floor(Math.random() * weightOptions.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selectedClassifications.push(weightOptions[randomIndex]);
    }
  }
  
  return selectedClassifications;
}

async function main() {
  const menuLinks = await extractInitialLinks();
  let allLinks = [];

  for (const link of menuLinks) {
    console.log(`🔍 Đang xử lý: ${link}`);
    const linksOnPage = await extractLinksFromPage(link);
    allLinks.push(...linksOnPage);
  }

  const uniqueLinks = [...new Set(allLinks)];
  console.log("\n🎯 Tổng số link tìm được:", uniqueLinks.length);
  console.log(uniqueLinks);

  const products = [];

  for (const url of uniqueLinks) {
    const product = await crawlProduct(url);
    if (product) products.push(product);
    await delay(1000);
  }

  const validProducts = products.filter((p) => p && p.name);

  // Đảm bảo thư mục tồn tại
  if (!fs.existsSync('./crawlData')) {
    fs.mkdirSync('./crawlData', { recursive: true });
  }

  fs.writeFileSync(
    "./crawlData/product.json",
    JSON.stringify(validProducts, null, 2),
    "utf-8"
  );
  console.log(`✅ Đã lưu ${validProducts.length} sản phẩm vào file product.json`);
}

async function crawlProduct(url) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
    const $ = cheerio.load(html);

    const name = $(".product-name").text().trim();
    const priceText = $(".old-price").first().text().trim() || null;
    const imageUrls = [];
    $("#lightgallery .swiper-slide").each((_, el) => {
      const imgUrl = $(el).attr("data-src");
      if (imgUrl) imageUrls.push(imgUrl);
    });
    const description = $(".product-content p").text().trim() || "";

    // Xử lý price và salePrice
    const price = priceText
      ? parseFloat(priceText.replace(/[^\d]/g, ""))
      : null;
    const salePrice = price ? parseFloat((price * 0.9).toFixed(2)) : null;

    // Tạo phân loại ngẫu nhiên
    const classifications = generateRandomClassifications();

    return {
      name,
      price,
      salePrice,
      quantity: Math.floor(Math.random() * 50) + 1, // random 1-50
      category_id: 1, // gán mặc định
      classification: classifications, // thêm phân loại ngẫu nhiên
      images: imageUrls,
      description,
    };
  } catch (error) {
    console.error(`Lỗi khi crawl dữ liệu từ ${url}:`, error.message);
    return null;
  }
}

module.exports = {
  main,
};