const express = require('express');
const ProductsService = require('../services/products');
const { json } = require('express');

function productsApi(app) {
  const router = express.Router();
  const productsService = new ProductsService();

  app.use('/products', router);

  // Get products List
  router.get('/', async (req, res, next) => {
    try {
      const products = await productsService.getProducts();
      res.status(200).json({
        data: products,
        message: 'Products listed'
      });
    } catch (error) {
      next(error);
    }
  });

  // Get one product by Id
  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const productById = await productsService.getProduct(id);
      res.status(200).json({
        data: productById,
        message: 'Product listed'
      });
    } catch (error) {
      next(error);
    }
  });

  // Create one product
  router.post('/', async (req, res, next) => {
    try {
      const product = req.body;
      if (Object.keys(product).length) {
        const productCreated = await productsService.createProduct(product);
        res.status(201).json({
          data: productCreated,
          message: 'Product created'
        });
      } else {
        const message = 'Please enter data to create the product';
        res.status(200).json({
          message
        });
      }
    } catch (error) {
      next(error);
    }
  });

  // Modify one product
  router.put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = req.body;

      if (Object.keys(product).length) {
        const productEdited = await productsService.editProduct(id, product);
        res.status(200).json({
          data: productEdited,
          message: 'Product edited'
        });
      } else {
        const message = 'Please enter an id or data to edit the product';
        res.status(200).json({
          message
        });
      }
    } catch (error) {
      next(error);
    }
  });

  // delete one product
  router.delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const productdeleted = await productsService.deleteProduct(id);
      console.log(Object.keys(productdeleted));

      Object.keys(productdeleted).length <= 0
        ? res.status(200).json({
            message: 'Product deleted'
          })
        : res.status(202).json({
            message: 'Product not removed'
          });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = productsApi;
