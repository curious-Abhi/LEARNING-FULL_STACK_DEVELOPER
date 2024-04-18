import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app=express();
const port=3000;

const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"book",
    password:"abhishek",
    port:5432,
})

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send("hi hello");
});



app.listen(port,()=>{
    console.log(`Server is running on the localhost:${port}`)
})