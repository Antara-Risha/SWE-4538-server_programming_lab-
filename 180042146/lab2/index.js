const express = require('express');
const app = express();

//import Routes
const authRoute = require('./routes/auth');

//Route Middlewires
app.use('/api/user',authRoute);




app.listen(3000, () => console.log('Server up and running'));

