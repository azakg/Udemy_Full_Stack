import express from "express";

const app = express();
const port = 3002;

var fruitList = ['apple', 'banana', 'cherry'];
// let current_date = new Date();
// let cs = current_date.getSeconds();


app.get("/", (req, res) => {
    let current_date = new Date();
    let cs = current_date.getSeconds();
    res.render("index.ejs", { cs, fruitList });
})

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})