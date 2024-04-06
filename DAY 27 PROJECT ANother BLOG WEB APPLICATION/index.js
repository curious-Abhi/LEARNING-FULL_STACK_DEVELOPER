import express from "express";
import bodyParser from "body-parser";
import articleRouter from "./routes/article.js";

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route to render the home page
app.get('/', (req, res) => {
  const articles = [
    { title: 'Test article 1', createdAt: new Date(), description: 'test description' },
    { title: 'Test article 2', createdAt: new Date(), description: 'test description' }
  ];
  res.render("articles/index.ejs", { articles });
});

// Mount the article router
app.use('/articles', articleRouter); // Corrected route path

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
