const express = require("express");
const router = express.Router();
const {ensureAuthenticated, addUserData} = require("./../middlewares/auth.middleware");

router.get("/",(req,res)=>{
    //res.render("users/login.ejs");
    res.render("welcome.ejs");
    //res.render("users/register.ejs");
    //res.render("dashboard.ejs");
});

router.get("/dashboard", ensureAuthenticated,addUserData,(req, res)=>{
res.render("dashboard.ejs",{ user: req.user});
});
 module.exports = router;