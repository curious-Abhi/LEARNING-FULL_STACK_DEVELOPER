import express from "express";
const router = express.Router();

// Route to render the form for creating a new article
router.get('/new', (req, res) => {
  res.render("articles/new.ejs");
});



// Route to create a new article
router.post('/', (req, res) => {
    const { title, description, markdown } = req.body;
    const article = {
      title,
      description,
      markdown
    };
    res.render('articles/show.ejs', { article: article });
  });
export default router;
