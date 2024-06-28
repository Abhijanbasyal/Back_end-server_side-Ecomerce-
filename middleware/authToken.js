const jwt = require('jsonwebtoken');
const createError = require('../utils/error');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token

        console.log("token", token)
        if (!token) {
            return next(createError(401, "Please Login...!"));

        }

        jwt.verify(token, process.env.SECRET_KEY,  (err, decoded) =>  {
            console.log(err)
            console.log("decoded", decoded)

            if (err) {
                console.log("Invalid Token", err)
            }

            req.userId = decoded?._id

            next()
        });


    } catch (err) {
        next(err)
    }
}


module.exports = authToken