const fs = require("fs");
const path = require("path");
const db = require("./models");

const filePath = path.join(__dirname, "crawlData", "articles.json");

const importData = async () => {
  try {
    // Đọc file JSON
    const rawData = fs.readFileSync(filePath, "utf8");
    const posts = JSON.parse(rawData);

    console.log("📌 Dữ liệu JSON:", posts);

    // Kiểm tra số lượng dữ liệu
    if (!Array.isArray(posts) || posts.length === 0) {
      console.error("❌ Không có dữ liệu hợp lệ để import!");
      process.exit(1);
    }

    // Chỉ lấy các trường cần thiết, đảm bảo content là chuỗi JSON hợp lệ
    const formattedPosts = posts.map((post) => ({
      title: post.title,
      // content:
      //   typeof post.content === "object"
      //     ? JSON.stringify(post.content)
      //     : post.content || "",
      content: post.content,
      images: post.images,
      category: post.category || "Uncategorized",
      author_id: post.author_id || 1, // Nếu thiếu, đặt giá trị mặc định
      createdAt: post.createdAt ? new Date(post.createdAt) : new Date(),
      updatedAt: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    }));

    console.log("📌 Dữ liệu sau khi format:", formattedPosts);

    // Nhập vào database
    await db.Post.bulkCreate(formattedPosts, { validate: true });

    console.log("✅ Dữ liệu đã được nhập vào database!");
    process.exit();
  } catch (error) {
    console.error("❌ Lỗi khi nhập dữ liệu:", error);
    process.exit(1);
  }
};

importData();
