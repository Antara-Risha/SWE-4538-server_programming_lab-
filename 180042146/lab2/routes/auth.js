const router = require('express').Router();
const userSchema = require('../model/User');
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");\
const {registerValidation,loginValidation} = require('../validation');

//validation


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
 


router.post('/register', async (req, res) => {
    // valodate the data before we a user 
  const {error} =registerValidation(req.body);

  if(error) return res.status(400).send(error.details[0].message);


  //check if the user is already in database
  const emailExist = await user.findOne({email: req.body.email});

  if ( emailExist) return res.status(400).send('Email alrady exists');
// hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password,salt);

    // const {name,email,password} = req.body;
   const user = {
       name: req.body.name,
       email: req.body.email,
       password: hashedPassword
   };

    //   const savedUser = await new userSchema(user).save();
    //    res.send(savedUser);
   // console.log(email);
    
   try {
    const savedUser = await 
    res.send(savedUser);
    console.log('rasia');
 } catch(err){
    res.status(400).send(err);

}
      
      
   

});


module.exports = router;