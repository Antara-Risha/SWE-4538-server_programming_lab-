const mongoose = require("mongoose");
const MOSchema = new mongoose.Schema({
    name:{
        type : String,
        require: true,
    },
    category:{
        type : String,
        require: true,
    },
    contact:{
        type : String,
        require: true,
    },
    email:{
        type : String,
        require: false,
    },
    institution:{
        type : String,
        require: true,
    },
    total:{
        type : Number,
        require: true,
    },
    paid:{
        type : Number,
        require: true,
    },
    selected:{
        type : Boolean,
        require: true,
    },
    tshirt:{
        type : String,
        require: true,
    },
    date:{
        type : Date,
        default: Date.now,
    },
    key:{
        type:String,
        required:true,
    },

});

const MathOlympiad = mongoose.model("MathOlympiad", MOSchema);
module.exports = MathOlympiad;