const {
  getAllProduct,
  getProductById,
  editProductById,
  addNewProduct,
  deleteProductById,
} = require("../models/products.model");

const getAllProductsController = (req, res, next) => {
  getAllProduct()
    .then((result) => res.json({ message: result }))
    .catch((error) => next(error));
};

const getProductByIdController = (req, res, next) => {
  getProductById(parseInt(req.body.id))
    .then((result) =>
      res.status(200).json({
        message: `Product with the id ${req.body.id} was found.`,
        result: result,
      })
    )
    .catch((error) => next(error));
};

const editProductByIdController = (req, res, next) => {
  editProductById(parseInt(req.params.id), req.body.data)
    .then((result) =>
      res.status(200).json({
        message: `Product with the id ${req.params.id} was modified.`,
        result: result,
      })
    )
    .catch((error) => next(error));
};

const addNewProductController = (req, res, next) => {
  addNewProduct(req.body.data)
    .then((result) => {
      res.status(201).json({
        message: `Product with the id ${result.id} was created.`,
        result: result,
      });
    })
    .catch((error) => next(error));
};

const deleteProductByIdController = (req, res, next) => {
  deleteProductById(parseInt(req.params.id))
    .then((result) => {
      res.status(201).json({
        message: `Product with the id ${result.id} was deleted.`,
        result: result,
      });
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  editProductByIdController,
  addNewProductController,
  deleteProductByIdController,
};
