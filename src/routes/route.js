const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require("../middleWare/mid")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login",userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mid.authenticate,mid.authorization, userController.getUserData)

router.put("/users/:userId",mid.authenticate, mid.authorization,userController.updateUser)

router.delete("/delete/:userId", mid.authenticate,mid.authorization,userController.deleteUser)

router.post("/users/:userId/posts", mid.authenticate,mid.authorization,userController.postMessage)
// router.post("users/:userId/posts",mid.authenticate,mid.authorization,userController.postMessage)


module.exports = router;