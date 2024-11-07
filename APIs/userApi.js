//create mini-exp app(Special route)
const exp=require('express')
const userApp=exp.Router()

//use body parser middeleware
userApp.use(exp.json())

//sample users list(Replaced with DB in future)
let usersList = [
    { id: 100, name: "ravi", age: 31 },
    { id: 200, name: "manasa", age: 21 },
  ];
  
  //Create REST API(Routes)
  //A route is used to handle client req
  //route to handle get req
  userApp.get("/users",(req, res) => {
    res.send({ message: "users", payload: usersList });
  });
  
  //route to to handle get req to get a user by id
  userApp.get("/users/:id", (req, res) => {
    //read value of url parameter
    let userId = Number(req.params.id); //{ id : 10}
    //find user with this userId
    let user = usersList.find((userObj) => userObj.id === userId);
    if (user === undefined) {
      res.send({ message: "No user found" });
    } else {
      //send res
      res.send({ message: "A user", payload: user });
    }
  });
  
  //route to handle post req(create new user)
  userApp.post("/user",(req, res) => {
    //read data send by the client in port req
    let newUser = req.body;
    //add new user to usersList
    usersList.push(newUser);
    //send res
    res.send({ message: "New user added" });
  });
  
  //route to handle put req(update user)
  userApp.put("/user", (req, res) => {
    //get modifiedUSer from client
    let modifiedUSer = req.body;
    //get index of user with id of modifiedUser
    let userIndex = usersList.findIndex(
      (userObj) => userObj.id === modifiedUSer.id
    );
    //if user not found
    if (userIndex === -1) {
      res.send({ message: "User not found to update" });
    } else {
      usersList.splice(userIndex, 1, modifiedUSer);
      res.send({ message: "User modified" });
    }
  });
  
  //route to delete user
  userApp.delete("/users/:id", (req, res) => {
    //read value of url parameter
    let userId = Number(req.params.id);
    //get index of user with id of modifiedUser
    let userIndex = usersList.findIndex((userObj) => userObj.id === userId);
    //if user not found
    if (userIndex === -1) {
      res.send({ message: "User not found to delete" });
    } else {
      usersList.splice(userIndex, 1);
      res.send({ message: "User deleted" });
    }
  });


  //export userApp
  module.exports=userApp;