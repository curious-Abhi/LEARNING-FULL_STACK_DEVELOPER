import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];

app.get("/", (req, res) => {
  var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  var today = new Date();
  let currentday = today.toLocaleDateString("en-US", options);
  res.render("todo.ejs", { tdate: currentday, newItems: newItems });
});

app.post('/', (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect('/');
});

// Endpoint to handle item removal
app.post('/remove', (req, res) => {
  let index = req.body.index;
  newItems.splice(index, 1);
  res.redirect('/');
});

// Endpoint to handle marking an item as completed
app.post('/complete', (req, res) => {
  let index = req.body.index;
  // Here, instead of removing the item, mark it as completed
  newItems[index] = { text: newItems[index], completed: true };
  res.redirect('/');
});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
