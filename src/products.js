const express = require('express');
const {productsMock} = require ('./products')
function productsApi(app){
    const router = express.Router();
    app.use('./products', router);

    router.get("/", async function(req, res, next){
        try {
            const products = await Promise.resolve(productsMock);
            
        } catch(err){
            next(err);
        }
    });

}
module.exports = productsApi;