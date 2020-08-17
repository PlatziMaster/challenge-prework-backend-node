const extress = require ('express');
const {storeMock } = require('mocks');
function storeApi(app){
    const router =express.Router();
    app.use ("/api/store".router);
    router.get("/",async function(req,res,next){
        try{
            const store= await Promise.resolve(storeMock);
            res.status(200).json({
                data: store,
                message:'movies listed'
            });
        }catch(err){
            next(err);
        }
    });
}
module.exports = moviesApi;
