const express = require('express')
const employeeRoute = require('./routes/employeeRoute')
const connectMongoDB = require('./connection')
const app = express()
const URL = "mongodb+srv://aqsashafique:admin123@dataapi.boxefyc.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/Employee',employeeRoute)
connectMongoDB(app,PORT,URL)





