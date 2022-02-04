const express = require("express")
const config = require("./config")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require('morgan')

config()

const app = express()

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda çalışıyor`)
 
})