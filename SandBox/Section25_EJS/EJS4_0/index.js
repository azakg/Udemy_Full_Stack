import express from 'express';


const app = express();
const port = 3001;

app.get("/", (req, res)=>{
    const today = new Date();
    const day = today.getDay();
    // const day = 2;

    let weekDay = "Weekday";
    let weekDayText = "it's time to work hurd!";

    if(day === 0 || day === 6){
        weekDay = "Weekend";
        weekDayText = "it's time to have fun!";
    };
    res.render("index.ejs", {
        weekDay: weekDay,
        weekDayText: weekDayText
    });
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})