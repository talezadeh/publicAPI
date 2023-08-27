import express from "express";
import axios from "axios";

const app= express();
const port= 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req,res)=>{
    const result= "";
    res.render("index.ejs");
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);
}
);