const config = require("config")
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    try {
        // check for token 
        if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

        // verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded
        next();
    }
    catch (err) {
        res.status(400).json({ msg: "Toekn is invalid" });
    }

}

module.exports = auth;