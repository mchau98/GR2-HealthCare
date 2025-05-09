const fs = require("fs");
const path = require("path");
const db = require("./models");

const filePath = path.join(__dirname, "crawlData", "articles_test.json");

const importData = async () => {
  try {
    const rawData = fs.readFileSync(filePath, "utf8");
    const posts = JSON.parse(rawData);

    if (!Array.isArray(posts) || posts.length === 0) {
      console.error("❌ Không có dữ liệu hợp lệ để import!");
      process.exit(1);
    }

    const formattedPosts = posts.map((post) => ({
      title: post.title,
      content: Array.isArray(post.content)
        ? JSON.stringify(post.content)
        : post.content || "",
      images: post.images,
      category: post.category || "Uncategorized",
      author_id: post.author_id || 1,
      createdAt: post.createdAt ? new Date(post.createdAt) : new Date(),
      updatedAt: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    }));

    await db.Post.bulkCreate(formattedPosts, { validate: true });

    console.log("✅ Dữ liệu đã được nhập vào database!");
    process.exit();
  } catch (error) {
    console.error("❌ Lỗi khi nhập dữ liệu:", error);
    process.exit(1);
  }
};

importData();
