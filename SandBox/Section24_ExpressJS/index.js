import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Lving room")
});
 
app.get("/john", (req, res)=>{
    res.send("John's room");
})

app.get("/tom", (req, res)=>{
    res.send("Tom's room");
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}!`);
});
