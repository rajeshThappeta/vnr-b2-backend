//create mini-exp app(Special route)
const exp = require("express");
const userApp = exp.Router();

//use body parser middeleware
userApp.use(exp.json());

//Create REST API(Routes)
//A route is used to handle client req
//route to handle get req
userApp.get("/users",async (req, res) => {
  try{
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //read users from db
  let usersList= await usersCollectionObj.find().toArray()
  //send res
  res.send({message:"all users",payload:usersList})
  }catch(err){
    res.send({message:"error occurred",error:err.message})
  }
});





//route to to handle get req to get a user by name
userApp.get("/users/:name", async(req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get name from url
  let nameOfUrl=req.params.name;
  //get user by name
  let user=await usersCollectionObj.findOne({name:nameOfUrl})
  console.log(user)
  //if user  not found
  if(user===null){
    res.send({message:"No user found"})
  }else{
    res.send({message:"user found",payload:user})
  }

});





//route to handle post req(create new user)
userApp.post("/user", async(req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get body of req
  let userFromClient=req.body;
  //insert
  let dbRes= await usersCollectionObj.insertOne(userFromClient)
 // console.log(dbRes)
  //send res
  res.send({message:"New user created"})
});








//route to handle put req(update user)
userApp.put("/user", async(req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get modified user
  let modifiedUser=req.body;
  //update
  let dbRes=await usersCollectionObj.updateOne({name:modifiedUser.name},{$set:{...modifiedUser}})

  if(dbRes.modifiedCount===1){
    res.send({message:"User modified"})
  }else{
    res.send({message:"No modification"})
  }
});





//route to delete user
userApp.delete("/users/:name", async(req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get name from url
  let nameOfUrl=req.params.name;
  //delete
  let dbRes=await usersCollectionObj.deleteOne({name:nameOfUrl})
  //send res
  res.send({message:"User removed"})

});

//export userApp
module.exports = userApp;
