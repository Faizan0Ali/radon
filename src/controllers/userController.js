const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  try {
    let data = req.body

    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })

    }
    else res.status(400).send({ msg: "Bad request" })

  } catch (err) {
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const loginUser = async function (req, res) {
   try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    res.status(400).send({ status : false,  msg: "username or the password is not correct",});
 

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);

  res.status(201).send({ status: true, token: token });
  
  } catch(err){
  console.log("This is the error", err.message)
  res.status(500).send({msg: "Error", error: err.message})
}
}

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
   res.status(400).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
} catch(err){
  res.status(500).send({msg: "Error", error: err.message})
}
}


const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    // Return an error if no user with the given id exists in the db
    if (!user) {
      res.status(400).send("No such user exists")
    }
  
    let userData = req.body
    let updateUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
  
    res.send({ msg: ["Changes has been done", userData], status: updateUser })

}catch(err){
  res.status(500).send(err.message)
}
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases

}

const deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
  // let token = req.headers["x-auth-token"];

  if (!userId) {
    res.status(400).send({ msg: "userId is required" })
  }
  // if(!token){
  //   return res.send({status: false, msg: "token must be present"});
  // }
  let userResponse = await userModel.findByIdAndUpdate({ _id: userId }, { IsDeleted: true }, { new: true });
  res.status(201).send({ status: true, data: userResponse });

  }catch(err){
    res.status(500).send(err.message)
  }
  
}
const postMessage = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId)
    // if(!user) return res.send({status:false, msg:"no such user exist"})
    console.log(user)
    let message = req.body
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
  
    //return the updated user document
     res.status(201).send({ status: true, data: updatedUser })
  }catch(err){
    res.status(500).send(err.message)
  }

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.postMessage=postMessage

// module.exports = { createUser, getUserData, updateUser, loginUser, deleteUser, postMessage}