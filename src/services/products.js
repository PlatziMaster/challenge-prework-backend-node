const productStorage = require('../assets/db');

class ProductsService {
  constructor() {
    this.collection = productStorage;
  }

  getProducts = async () => {
    const productsList = await this.collection;
    return productsList;
  };
  getProduct = async (id) => {
    const _id = parseInt(id);
    const productById = await this.collection.products.find(
      (product) => product.id === _id
    );
    return productById;
  };
  createProduct = async (params) => {
    const newProduct = params;
    return newProduct;
  };
  editProduct = async (id, params) => {
    const product = await this.getProduct(id);
    const productEdited = { id: product.id, product: params.product };
    return productEdited;
  };
  deleteProduct = async (id) => {
    const product = await this.getProduct(id);
    const productEliminated = {};
    return productEliminated;
  };
}

module.exports = ProductsService;
