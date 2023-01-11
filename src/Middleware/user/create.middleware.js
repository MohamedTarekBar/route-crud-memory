/* eslint-disable max-len */
const Joi = require('joi');

const createUserValidator = (req, res, next) => {
  const error = Joi.object({
    email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: {allow: ['com', 'net']},
        })
        .trim()
        .pattern(/^\S*$/)
        .required()
        .error(new Error('error in email')),
    firstName: Joi.string()
        .min(3)
        .max(50)
        .trim()
        .pattern(/^\S*$/)
        .required()
        .error(new Error('error in first name')),
    lastName: Joi.string()
        .min(3)
        .max(50)
        .trim()
        .pattern(/^\S*$/)
        .required()
        .error(new Error('error in last name')),
    password: Joi.string()
        .pattern(
            new RegExp(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            ),
        )
        .required()
        .error(new Error('error in password')),
  }).validate(req.body).error;
  
  if (error === undefined) {
    const user = {
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim(),
      email: req.body.email.trim().toLowerCase(),
      password: req.body.password,
    };
    res.locals.user = user;
    next();
  } else {
    throw new Error(error.message);
  }
};

module.exports = createUserValidator;
