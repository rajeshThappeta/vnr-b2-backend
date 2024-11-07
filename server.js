//create HTTP SERVER

const exp = require("express");
const app = exp();
app.listen(3000, () => console.log("http server listening on port 3000"));

const userApi=require('./APIs/userApi')
const productApi=require('./APIs/productApi')

//forward req to userApi , if path starts with /user-api
app.use('/user-api',userApi)

//forward req to productApi , if path starts with /product-api
app.use('/product-api',productApi)