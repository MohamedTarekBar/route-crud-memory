/* eslint-disable max-len */
const Joi = require('joi');

const updateUserValidator = (req, res, next) => {
    const error = Joi.object({
        id: Joi.number()
            .min(0)
            .required()
            .error(new Error('please provide id as params in link like /users/1')),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net'] },
            })
            .trim()
            .pattern(/^\S*$/)
            .error(new Error('error in email')),
        firstName: Joi.string()
            .min(3)
            .max(50)
            .trim()
            .pattern(/^\S*$/)
            .error(new Error('error in first name')),
        lastName: Joi.string()
            .min(3)
            .max(50)
            .trim()
            .pattern(/^\S*$/)
            .error(new Error('error in last name')),
        password: Joi.string()
            .pattern(
                new RegExp(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                )
            )
            .error(new Error('error in password')),
    }).validate({
        id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }).error;

    if (error === undefined) {
        const user = {
            id: req.params.id,
            firstName: req.body.firstName ? req.body.firstName.trim() : undefined,
            lastName: req.body.lastName ? req.body.lastName.trim() : undefined,
            email: req.body.email ? req.body.email.trim().toLowerCase() : undefined,
            password: req.body.password ? req.body.firstName.trim() : undefined,
        };
        res.locals.user = user;
        next();
    } else {
        throw new Error(error.message);
    }
};

module.exports = updateUserValidator;
