const fs=require("fs");

/*fs.writeFile("msg.txt","hwllo from node js", (err)=>{
    if(err) throw err;
    console.log("the files has been saved");
    console.log("hellow from abhishek")
})
*/

fs.readFile("msg.txt" ,"utf8" ,(err,data)=>{
    if(err) throw err;
    console.log(data);
})