const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()

 dotenv.config({ path: ".env" })

 mongoose.connect(process.env.MONGODB_URL)
 .then(() => console.log("DB connection successful"))

 app.use(express.json())

 app.listen(3000, () => { 
    console.log("app is running")
 })