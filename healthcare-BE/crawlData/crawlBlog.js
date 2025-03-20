const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function crawlLinks() {
    try {
        const url = 'https://hebekery.vn/blogs/all';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        const categoryLinks = [];
        $('.nav-blog .li_menu a').each((index, element) => {
            const link = $(element).attr('href');
            if (link) {
                categoryLinks.push(`https://hebekery.vn${link}`);
                categoryLinks.push(`https://hebekery.vn${link}?page=2`);
                categoryLinks.push(`https://hebekery.vn${link}?page=3`);

            }
        });
        
        console.log('Category Links:', categoryLinks);
        
        const articleLinks = [];
        $('.blogs-rights h3 a').each((index, element) => {
            const link = $(element).attr('href');
            if (link) {
                articleLinks.push(`https://hebekery.vn${link}`);
            }
        });
        
        console.log('Article Links:', articleLinks);
        const articles = await Promise.all(articleLinks.map(crawlData));

        console.log('Tất cả bài viết đã được crawl:', articles);
        fs.writeFileSync('./crawlData/articles.json', JSON.stringify(articles, null, 2), 'utf-8');

        console.log('Tất cả bài viết đã được lưu vào articles.json');


        
    } catch (error) {
        console.error('Error fetching the page:', error);
    }
}


async function crawlData(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let article = {
            title: $('h1.article-name').text().trim(),
            date: $('.entry-date p').text().trim(),
            content: $('.entry-content p, .entry-content h2, .entry-content h3, .entry-content ul li')
                .map((index, element) => $(element).text().trim())
                .get(),
            images: $('.entry-content img')
                .map((index, element) => {
                    const imgSrc = $(element).attr('src');
                    return imgSrc ? (imgSrc.startsWith('http') ? imgSrc : `https:${imgSrc}`) : null;
                })
                .get()
        
        };

        $('.entry-content p, .entry-content h2, .entry-content h3, .entry-content ul li').each((index, element) => {
            article.content.push($(element).text().trim());
        });

        return article
    } catch (error) {
        console.error("Lỗi khi crawl dữ liệu:", error);
    }
}


module.exports = {crawlLinks}
