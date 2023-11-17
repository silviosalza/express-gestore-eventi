const express = require('express');
const dotenv = require('dotenv');
const eventRouter = require("./routers/eventRouter");

dotenv.config();

//creo istanza express
const app = express();

//registro il tipo di bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/events" , eventRouter)




app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});
