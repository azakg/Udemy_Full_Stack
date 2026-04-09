import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var bandName = "";

app.use(bodyParser.urlencoded({ extended: true}));

function bandGenerator(req, res, next){
  bandName = req.body["street"]+req.body["pet"];
  next();
}

app.get("/", (req, res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.use(bandGenerator);

app.post("/submit1", (req, res)=>{
  res.send(`<h1>Your band name is: </h1><h2>${bandName}</h2>`);
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})