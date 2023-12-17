const products = [
  {
    id: "leatherShoe",
    description: "Leather Shoe",
    price: 220.58,
    reviews: [],
  },
  {
    id: "blueJean",
    description: "Blue Jeans",
    price: 55.53,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  const filteredProducts = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  return filteredProducts;
}

function getProductById(id) {
  const product = products.find((product) => product.id === id);
  return product;
}

function addNewProduct(id, description, price) {
  const newProduct = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    const review = { rating, comment };
    product.reviews.push(review);
    return review;
  }
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
