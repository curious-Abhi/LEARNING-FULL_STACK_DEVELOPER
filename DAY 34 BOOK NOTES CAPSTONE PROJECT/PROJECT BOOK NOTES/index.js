// Import required modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Create Express app
const app = express();
const port = 3000;

// PostgreSQL connection configuration
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book",
    password: "abhishek",
    port: 5432,
});

// Connect to PostgreSQL
db.connect();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let books = [
  { 
    id: 1, 
    title: "The Great Gatsby", 
    description: "A novel by F. Scott Fitzgerald", 
    cover: "https://example.com/great_gatsby.jpg" 
  },
  { 
    id: 2, 
    title: "To Kill a Mockingbird", 
    description: "A novel by Harper Lee", 
    cover: "https://example.com/to_kill_a_mockingbird.jpg" 
  },
  { 
    id: 3, 
    title: "1984", 
    description: "A dystopian novel by George Orwell", 
    cover: "https://example.com/1984.jpg" 
  },

];


// Route to render index.ejs with books data
app.get('/', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM books ORDER BY id ASC");
        res.render('index.ejs', { books: result.rows });
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle adding a new book
app.post('/books', async (req, res) => {
    try {
        const { title, description, cover } = req.body;
        const result = await db.query('INSERT INTO books (title, description, cover) VALUES ($1, $2, $3) RETURNING *', [title, description, cover]);
        res.redirect('/');
    } catch (err) {
        console.error('Error adding book:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to render the form for adding a new book
app.get('/books/add', (req, res) => {
    res.render('add_book_form.ejs');
});


// Route to render the edit form for a specific book
app.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
      // Retrieve the book from the database based on its ID
      const result = await db.query('SELECT * FROM books WHERE id = $1', [id]);
      if (result.rows.length === 0) {
          // If no book with the specified ID is found, return a 404 status
          return res.status(404).send('Book not found');
      }
      // Render the edit form template with the book data
      res.render('edit.ejs', { book: result.rows[0] });
  } catch (err) {
      console.error('Error fetching book for editing:', err);
      res.status(500).send('Internal Server Error');
  }
});

// Route to handle editing a book
app.post('/edit', async (req, res) => {
  const { editItemId, updatedTitle, updatedDescription, updatedCover } = req.body;
  try {
      // Update the book in the database
      const result = await db.query('UPDATE books SET title = $1, description = $2, cover = $3 WHERE id = $4 RETURNING *', [updatedTitle, updatedDescription, updatedCover, editItemId]);
      res.redirect('/');
  } catch (err) {
      console.error('Error updating book:', err);
      res.status(500).send('Internal Server Error');
  }
});





// Route to handle deleting a book
app.post('/delete', async (req, res) => {
  const id = req.body.deleteItemId;
  try {
      await db.query('DELETE FROM books WHERE id = $1', [id]);
      res.redirect('/');
  } catch (err) {
      console.error('Error deleting book:', err);
      res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on the localhost:${port}`);
});
