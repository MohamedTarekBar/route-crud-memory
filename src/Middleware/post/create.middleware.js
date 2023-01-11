/* eslint-disable max-len */
const Joi = require('joi');

const createPostValidator = (req, res, next) => {
    const error = Joi.object({
        title: Joi.string()
            .trim()
            .required()
            .error(new Error('title name required (title)')),
        description: Joi.string()
            .trim()
            .required()
            .error(new Error('description name required (description)')),
    }).validate(req.body).error;

    if (error === undefined) {
        const post = {
            title: req.body.title,
            description: req.body.description,
        };
        res.locals.post = post;
        next();
    } else {
        throw new Error(error.message);
    }
};

module.exports = createPostValidator;
