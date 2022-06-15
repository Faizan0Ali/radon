const jwt = require("jsonwebtoken")


let mid = function (req, res, next) {

    let Token = req.headers["x-auth-token"]

    if (Token != undefined) {
        console.log("Done")
        next()
    } else {
        res.send("request is missing a mandatory header")
    }



}

module.exports.mid = mid

