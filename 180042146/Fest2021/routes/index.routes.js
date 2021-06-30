const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    //res.render("users/login.ejs");
    res.render("welcome.ejs");
    //res.render("users/register.ejs");
    //res.render("dashboard.ejs");
});
 module.exports = router;