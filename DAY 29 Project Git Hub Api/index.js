import express from "express";
import axios from 'axios';

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("repositories.ejs", { username: req.query.username || '' });
});

app.get('/repositories', async (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.redirect('/');
    }
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repositories = response.data.map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url
        }));
        res.render('repositories.ejs', { username, repositories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch repositories" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
