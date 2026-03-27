//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const password = req.body.password;

  if (password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send(`
      <h1>Enter Password</h1>
      <form method="POST" action="/check">
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <p style="color:red;">Password is wrong, Try one more time</p>
    `);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
