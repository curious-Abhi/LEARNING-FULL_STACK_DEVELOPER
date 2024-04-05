import express from "express";
import bodyParser from "body-parser";
import articleRouter from "./routes/article.js";


const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the home page
app.get('/', (req, res) =>{
  const article = [
    { title: 'Test article 1', createdAt: new Date(), description: 'test description' },
    { title: 'Test article 2', createdAt: new Date(), description: 'test description' }
  ];
  res.render("articles/index.ejs", { article: article });
});

// Mount the article router
app.use('/article', articleRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
