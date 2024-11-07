//create mini-exp app
const exp=require('express')
const productApp=exp.Router()

//use body parser middeleware
productApp.use(exp.json())

//PRODUCT API
productApp.get('/products',(req,res)=>{
    res.send({"message":"all products"})
})


//export productApp
module.exports=productApp;

