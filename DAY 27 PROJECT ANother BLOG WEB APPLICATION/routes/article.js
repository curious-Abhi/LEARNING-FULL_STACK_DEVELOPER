
import express from "express";
const router = express.Router();

// Temporary storage for articles
let articles = [];

router.get('/new', (req, res) => {
  res.render('articles/new.ejs');
});

// Route to create a new article
router.post('/', (req, res) => {
    let { title, description, markdown } = req.body;
    let article = {
        id: articles.length + 1, // Assign a unique ID
        title,
        description,
        markdown,
        createdAt: new Date()
    };
    articles.push(article); // Add the new article to the array
    res.render('articles/show.ejs', { article: article });
});

// Route to render the home page
router.get('/', (req, res) => {
  res.render('articles/index.ejs', { articles: articles });
});

// Route to render individual article page
router.get('/show/:id', (req, res) => {
  const id = req.params.id;
  const article = articles.find(article => article.id === parseInt(id));
  res.render('articles/show.ejs', { article: article });
});

export default router;
