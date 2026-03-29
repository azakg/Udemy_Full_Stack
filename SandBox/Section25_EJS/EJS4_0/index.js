import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res)=>{
    const today = new Date();
    const day = today.getDay();

    let weekday = "weekday";
    let weekdayText = "it's time to work hard";

    if (day === 0 || day === 6){
        weekday = "weekend";
        weekdayText = "it's time to have fun";
    }

    res.render("index.ejs", {dayType: weekday, dayText: weekdayText});
});

app.listen(port, () => { console.log(`Server running on port ${port}`)});