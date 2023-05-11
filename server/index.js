const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path:'../server/.env'});

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//Let's import routes
const TodoItemRoute = require('./routes/todoItems');


//Lets connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Good to Go..."))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);


//Add Port and connect to Server
app.listen(PORT, ()=> console.log("Server Initiated") );