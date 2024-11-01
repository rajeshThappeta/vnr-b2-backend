//create HTTP SERVER

const exp = require("express");
const app = exp();
app.listen(3000, () => console.log("http server listening on port 3000"));

//Create REST API(Routes)
//A route is used to handle client req
    //route to handle GET req
    app.get('/users',(req,res)=>{
        res.send({message:"users list"})
    })

    //route to handle post req
    app.post('/users',(req,res)=>{
        res.send({message:"user created"})
    })

     //route to handle put req
     app.put('/user',(req,res)=>{
        res.send({message:"user updated"})
    })

    //route to handle delete req
    app.delete('/user',(req,res)=>{
        res.send({message:"user deleted"})
    })