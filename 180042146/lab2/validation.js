const Joi = require('@hapi/joi');
//register validation

const registerValidation = (data) =>
{
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6).required()
    };
    
   return    Joi.validation(data,schema);
};
const loginValidation = (data) =>
{
    const schema = {
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6).required()
    };
    
   return    Joi.validation(data,schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;