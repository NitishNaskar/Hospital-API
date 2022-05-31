const express=require("express");
const app=express();
const port=8000;


app.use("/",require("./routes"));

app.listen(port, function(err){
    if(err){
        console.log("Error ! In Node Server ....");
        return;
    }
    console.log("Node Server is running ....");
});