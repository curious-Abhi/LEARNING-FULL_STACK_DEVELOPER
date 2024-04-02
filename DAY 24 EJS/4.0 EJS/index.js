import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  const day = d.getDay();

  //console.log(day)
  let dtype = "a weekday";
  let adv = "its time to work hard";

  if (day === 0 || day === 6) {
    dtype = "a weekend";
    adv = "its time to have some fun";
  }
  res.render("index.ejs", {
    dayType: dtype,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
