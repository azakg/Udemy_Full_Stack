import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/* Этот код пример того как делать логи
, в этом примере при усшном подключениее пользователя
то в терминале отобразится вот такая запись
"Listening on port 3000
GET / 200 5 - 2.682 ms
GET /favicon.ico 404 150 - 1.871 ms"
Это я как понимая из за вот этой строки кода
app.use(morgan("tiny"));
*/

