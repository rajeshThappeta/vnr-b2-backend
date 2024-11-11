//create HTTP SERVER

const exp = require("express");
const app = exp();
app.listen(3000, () => console.log("http server listening on port 3000"));


//Connect to MongoDB server
    //get MongoClient
   const mClient= require('mongodb').MongoClient
    //connect to DB 
    mClient.connect('mongodb://localhost:27017/vnrb2')
    .then(()=>{
        console.log("DB connection is success")
    })
    .catch(err=>{
        console.log("Error in DB connection ",err)
    })

const userApi=require('./APIs/userApi')
const productApi=require('./APIs/productApi')

//forward req to userApi , if path starts with /user-api
app.use('/user-api',userApi)

//forward req to productApi , if path starts with /product-api
app.use('/product-api',productApi)