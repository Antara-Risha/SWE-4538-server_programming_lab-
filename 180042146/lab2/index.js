const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const postRoute = require('./routes/posts');
//const User = require('./model/User');

//import Routes
const authRoute = require('./routes/auth');

dotenv.config();
app.use(authRoute)

//conncet to db
mongoose.connect( 
    process.env.DB_CONNECT,
{ useNewUrlParser:true ,useUnifiedTopology: true } ,
() => console.log('connected to DB'));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);



//middleware
//app.use(express.json());

//Route Middlewires
//app.use('/api/user',authRoute);
//app.use('/api/posts',postRoute);




app.listen(3000, () => console.log('Server up and running'));

