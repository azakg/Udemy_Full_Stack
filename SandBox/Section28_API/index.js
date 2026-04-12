import express from "express";
import axios from "axios";

const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", async(req, res)=>{
    
})