const products = [
  {
    id: "1",
    name: "Gorra Platzi",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus aut, ea fugiat, error, cumque sequi ipsum dolorum omnis eum quisquam magnam aliquam harum! Sit, porro? Officia perspiciatis dicta quasi.",
  },
  {
    id: "2",
    name: "Camiseta Platzi",
    price: 400,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus aut, ea fugiat, error, cumque sequi ipsum dolorum omnis eum quisquam magnam aliquam harum! Sit, porro? Officia perspiciatis dicta quasi.",
  },
  {
    id: "3",
    name: "Sudadera Platzi",
    price: 300,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus aut, ea fugiat, error, cumque sequi ipsum dolorum omnis eum quisquam magnam aliquam harum! Sit, porro? Officia perspiciatis dicta quasi.",
  },
  {
    id: "4",
    name: "Boleto Platzi",
    price: 15,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus aut, ea fugiat, error, cumque sequi ipsum dolorum omnis eum quisquam magnam aliquam harum! Sit, porro? Officia perspiciatis dicta quasi.",
  },
  {
    id: "5",
    name: "Bebida fría",
    price: 10,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus aut, ea fugiat, error, cumque sequi ipsum dolorum omnis eum quisquam magnam aliquam harum! Sit, porro? Officia perspiciatis dicta quasi.",
  },
];

const getProducts = (id) => {
  const index = products.findIndex((product) => product.id === id);
  return index > -1
    ? products[index]
    : { message: "No se han encontrado resultados" };
};

module.exports = { products, getProducts };
