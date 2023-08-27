import express from "express";
import axios from "axios";

const app= express();
const port= 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req,res)=>{

    res.render("index.ejs");
});

app.post("/get-price", async(req,res)=>{
    try{
        console.log(req.body.sybmol);
        const result= await axios.get("https://api.blockchain.com/v3/exchange/tickers/" + req.body.sybmol);
        res.render("index.ejs",{priceQuote:JSON.stringify(result.data.last_trade_price)} );
    } catch(err){
        console.log(err.message);
    }


});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);
}
);