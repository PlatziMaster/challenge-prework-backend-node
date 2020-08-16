const { Router } = require("express"),
  {
    getAllProductsController,
    getProductByIdController,
    editProductByIdController,
    addNewProductController,
    deleteProductByIdController,
  } = require("../controllers/products.controller"),
  router = Router();

router.get("/", getAllProductsController);
router.post("/", getProductByIdController);
router.put("/:id", editProductByIdController);
router.post("/create", addNewProductController);
router.delete("/:id", deleteProductByIdController);

module.exports = router;
