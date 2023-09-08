const JWT = require('jsonwebtoken')
const auth = async (req, res, next) => {
    try {

        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ message: "No auth token , access denide" });
        }
        const isVerified = JWT.verify(token, "13QEWDSFGrty345*&yFs!@tgji*&GFD67^hgGFFFH");
        if (!isVerified) {
            res.status(401).json({ message: "Token verification failed,authorization denied." });
        }
        req.user = isVerified._id;
        req.token = token;
        // next is use for add next call back function in api call.
        next();
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    auth,
}