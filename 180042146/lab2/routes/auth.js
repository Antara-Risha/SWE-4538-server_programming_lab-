const router = require('express').Router();
const userSchema = require('../model/User');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/register', async (req, res) => {
    // const {name,email,password} = req.body;
   const user = {
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
   };

    //   const savedUser = await new userSchema(user).save();
    //    res.send(savedUser);
   // console.log(email);
    
   try {
    const savedUser = await new userSchema(user).save();
    res.send(savedUser);
    console.log('rasia');
 } catch(err){
    res.status(400).send(err);

}
      
      
   

});


module.exports = router;