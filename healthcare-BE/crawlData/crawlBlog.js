const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function crawlLinks() {
    try {
        const baseUrl = 'https://hebekery.vn';
        const homepage = await axios.get(`${baseUrl}/blogs/all`);
        const $ = cheerio.load(homepage.data);

        const categoryLinks = [];
        $('.nav-blog .li_menu a').each((index, element) => {
            const link = $(element).attr('href');
            if (link) {
                // Giả định tối đa 3 trang mỗi chuyên mục
                for (let page = 1; page <= 3; page++) {
                    const pageLink = `${baseUrl}${link}${page > 1 ? `?page=${page}` : ''}`;
                    categoryLinks.push(pageLink);
                }
            }
        });

        console.log('Tổng số category pages:', categoryLinks.length);

        const articleLinksSet = new Set();

        for (const categoryUrl of categoryLinks) {
            try {
                const { data } = await axios.get(categoryUrl);
                const $ = cheerio.load(data);
                $('.blogs-rights h3 a').each((index, element) => {
                    const articleUrl = $(element).attr('href');
                    if (articleUrl) {
                        articleLinksSet.add(`${baseUrl}${articleUrl}`);
                    }
                });
            } catch (err) {
                console.error(`Lỗi khi load ${categoryUrl}:`, err.message);
            }
        }

        const articleLinks = Array.from(articleLinksSet);
        console.log('Tổng số bài viết:', articleLinks.length);

        const articles = await Promise.all(articleLinks.map(crawlData));
        fs.writeFileSync('./crawlData/articles_test.json', JSON.stringify(articles, null, 2), 'utf-8');

        console.log('Tất cả bài viết đã được lưu vào articles_test.json');
    } catch (error) {
        console.error('Error fetching the main page:', error);
    }
}

async function crawlData(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const article = {
            title: $('h1.article-name').text().trim(),
            date: $('.entry-date p').text().trim(),
            content: $('.entry-content p, .entry-content h2, .entry-content h3, .entry-content ul li')
                .map((_, el) => $(el).text().trim()).get(),
            images: $('.entry-content img')
                .map((_, el) => {
                    const src = $(el).attr('src');
                    return src ? (src.startsWith('http') ? src : `https:${src}`) : null;
                }).get().filter(Boolean),
        };

        return article;
    } catch (error) {
        console.error(`Lỗi khi crawl dữ liệu từ ${url}:`, error.message);
    }
}

module.exports = { crawlLinks };
