import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

let bowl = ["Apple", "Orange", "Pears"];

app.get("/", (req, res)=>{
    res.render('index.ejs', {fruits: bowl});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});