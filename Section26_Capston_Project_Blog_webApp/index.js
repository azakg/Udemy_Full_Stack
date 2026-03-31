import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3004;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    const usersTopcName = req.body["topic"];
    const usersTopc = req.body["topic_body"];
    res.render("index.ejs", {usersTopcName: usersTopcName, usersTopc: usersTopc});
})
app.listen(port, ()=>{
    console.log(`Listen on port ${port} port`);
} )