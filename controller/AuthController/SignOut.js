const createSuccess = require("../../utils/success");


async function SignOut(req, res, next) {
    try {
        res.clearCookie('access_token');
        res.status(200).json(createSuccess(200,'User has been logged out!'));
    } catch (err) {
        next(err);
    }

}

module.exports = SignOut;