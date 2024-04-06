import express from "express";
const router = express.Router();


router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
})

// Temporary storage for articles
let articles = [];

// Route to create a new article
router.post('/', (req, res) => {
    const { title, description, markdown } = req.body;
    const article = {
        id: articles.length + 1, // Assign a unique ID
        title,
        description,
        markdown,
        createdAt: new Date()
    };
    articles.push(article); // Add the new article to the array
    res.render('articles/show.ejs', { article });
});

export default router;
