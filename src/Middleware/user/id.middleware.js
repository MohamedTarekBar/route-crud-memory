const Joi = require('joi');

const userIdValidator = (req, res, next) => {
    const error = Joi.number().min(0).required().error(new Error('id required a valid number')).validate(req.params.id).error?.message;
    if (error) {
        throw error;
    } else {
        res.locals.id = {id: req.params.id};
        next();
    }
};

module.exports = userIdValidator;