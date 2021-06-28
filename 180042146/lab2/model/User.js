const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6

    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
    
  
},
{ collection: "blogs" });

const Blog  = mongoose.model('Blog', userSchema);
module.exports = Blog;

module.exports = mongoose.model('User', userSchema);