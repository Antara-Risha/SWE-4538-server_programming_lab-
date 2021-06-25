const express = require('express');
const app = express();
const mongoose = require('mongoose');

//conncet to db
mongoose.connect('mongodb+srv://raisa:dhupa1468@cluster0.vfn3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useUnifiedTopology: true } ,
() => console.log('connected to DB'));
//import Routes
const authRoute = require('./routes/auth');

//Route Middlewires
app.use('/api/user',authRoute);




app.listen(3000, () => console.log('Server up and running'));

