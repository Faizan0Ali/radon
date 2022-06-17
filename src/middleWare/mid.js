const jwt = require("jsonwebtoken")


let authenticate = function (req, res, next) {

    try {
        let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]
        if (!token) res.status(401).send({ msg: "Token not found" })

        let decodedToken = jwt.verify(token, "functionup-radon");
        if (!decodedToken) res.status(403).send({ msg: "Token is invalid" })
        next()
    } catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }

}

const authorization = function (req, res, next) {

    try {
        let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]
        if(!token) res.status(401).send({msg:"Token not found"})
        let decodedToken = jwt.verify(token, "functionup-radon");

        let userToBeModified = req.params.userId
        let userLoggedIn = decodedToken.userId

        if (userToBeModified != userLoggedIn) res.status(403).send({ msg: 'User logged is not allowed to modify the requested users data' })
        next()
    } catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
    
}

module.exports.authenticate = authenticate
module.exports.authorization = authorization
