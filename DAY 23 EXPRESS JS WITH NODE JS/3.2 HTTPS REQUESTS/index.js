import express from "express"
const app=express();
const port=3000;

app.get("/Homepage",(req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>About me<h1> <p>my name is Abhishek</p>");
});

app.get("/Contact",(req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>Contact Me<h1> <p>9523605579</p>");
});


app.listen(port,() =>{
 console.log(`server is running at ${port}`);
})