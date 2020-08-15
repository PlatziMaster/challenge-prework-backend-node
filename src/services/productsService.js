'use strict'

const storeProducts = require('../util/mocks/mockDataproducts')
const products = require('../util/mocks/mockDataproducts')

class ProductsService {
  constructor() {
    this.collection = storeProducts
  }

  getProducts = () => {
    const listProducts = this.collection
    return listProducts
  }

  getProduct = ({ id }) => {
    const productById = this.collection.filter(
      (product) => product.id['$oid'] == id
    )
    return productById || []
  }

  createProduct = ({ params }) => {
    const newProduct = { id: { $oid: '5f373de4fc66ae610a65101fa' } }
    return newProduct
  }

  updateProduct = ({ id, params }) => {
    const updateProduct = this.getProduct({ id })
    return updateProduct
  }

  deleteProduct = ({ id }) => {
    const deleteProduct = this.getProduct({ id })
    return deleteProduct
  }
}

module.exports = ProductsService
