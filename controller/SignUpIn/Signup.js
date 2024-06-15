const createError = require('../../utils/error');

async function userSignUpController(req, res, next) {
    try {
        const { email, password, name } = req.body;

        if (!name) {
            return next(createError(401, "Please, provide the email."));
        };

        if (!email) {
            return next(createError(401, "Please, provide the email."));
        };
        if (!password) {
            return next(createError(401, "Please, provide the email."));
        };



    } catch (err) {
        next(err);
    }
}

module.exports = userSignUpController;
