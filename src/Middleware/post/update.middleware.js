/* eslint-disable max-len */
const Joi = require('joi');

const updatePostValidator = (req, res, next) => {
    const error = Joi.object({
        id: Joi.number()
            .min(0)
            .required()
            .error(new Error('please provide id as params in link like /users/1')),
        title: Joi.string().trim().error(new Error('title name required (title)')),
        description: Joi.string()
            .trim()
            .error(new Error('description name required (description)')),
    }).validate({
        id: req.params.id,
        title: req.body.title,
        description: req.body.description,
    }).error;

    if (error === undefined) {
        const post = {
            id: req.params.id,
            title: req.body.title ? req.body.title.trim() : undefined,
            description: req.body.description
                ? req.body.description.trim()
                : undefined,
        };
        res.locals.post = post;
        next();
    } else {
        throw new Error(error.message);
    }
};

module.exports = updatePostValidator;
