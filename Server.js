const express = require('express');
const ConnectDB = require('./Config/ConnectDB');
const ContactRouter = require('./Route/Contact');
require('dotenv').config()
const app = express();



ConnectDB()




app.use(express.json())
app.use('/api/Contact',ContactRouter)
app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))