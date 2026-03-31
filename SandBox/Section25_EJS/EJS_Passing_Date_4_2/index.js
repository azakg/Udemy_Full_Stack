import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render('index.ejs');
});

app.post("/submit", (req, res)=>{
    const  numLetters = req.body["fName"].length + req.body["fName"].length;
    res.render("index.ejs", {numLetters1: numLetters})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});