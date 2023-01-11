/* eslint-disable no-unused-vars */
const errorMiddlewere = (
    err,
    req,
    res,
    next
) => {
    console.log(err)
    const status = err.status || 500;
    const message = err.message || 'whoops somsething went wrong';
    res.status(status).json({ status, message });
};

module.exports = errorMiddlewere;
