const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//conncet to db
mongoose.connect( 
    process.env.DB_CONNECT,
{ useUnifiedTopology: true } ,
() => console.log('connected to DB'));


//middleware
app.use(express.json());

//Route Middlewires
app.use('/api/user',authRoute);




app.listen(3000, () => console.log('Server up and running'));

