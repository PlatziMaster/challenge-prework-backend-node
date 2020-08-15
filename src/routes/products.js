'use strict'

const express = require('express')
const router = express.Router()

const ProductsService = require('../services/productsService')
const productsService = new ProductsService()

// the products route
router.get('/', (req, res) => {
  console.log('ingreso')
  let storeProducts = productsService.getProducts()
  let message = 'list of products'
  res.json({
    message,
    data: storeProducts,
  })
})

// the products route by id
router.get('/:id', (req, res) => {
  const { id } = req.params
  let product = productsService.getProduct({ id })
  let message = product.length > 0 ? 'product' : 'product not found, check id'
  res.json({
    message,
    data: product,
  })
})

// the products route create new
router.post('/', (req, res) => {
  const params = req.body
  if (Object.keys(params).length) {
    let newProducts = productsService.createProduct({ params })
    let message = 'products create'
    res.status(200).json({
      message,
      data: newProducts,
    })
  } else {
    let message = 'please send data for create product'
    res.status(200).json({
      message,
    })
  }
})

// the products route update
router.put('/:id', (req, res) => {
  const { id } = req.params
  const params = req.body
  if (Object.keys(params).length) {
    let updateProduct = productsService.updateProduct({ id, params })
    let message =
    updateProduct.length > 0 ? `product id ${id} has been updated` : 'product not found, check id'
    res.status(200).json({
      message,
    })
  } else {
    let message = 'please send data for update product'
    res.status(200).json({
      message,
    })
  }
})



// the products route delete
router.delete('/:id', (req, res) => {
  const { id } = req.params
  let deleteProduct = productsService.deleteProduct({ id })
  let message =
    deleteProduct.length > 0
      ? `product id ${id} has been removed`
      : 'product not removed, check id'
  res.json({
    message,
  })
})

module.exports = router
