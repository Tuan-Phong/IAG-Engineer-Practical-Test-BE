const seededProducts = [
  {
    id: 1,
    name: 'Cookies',
    price: '2.99',
  },
  {
    id: 2,
    name: 'Bread',
    price: '2.00',
  },
  {
    id: 3,
    name: 'Orange Juice',
    price: '5.00',
  },
];

const products = [...seededProducts];

const getProductById = (productId) =>
  products.find((product) => product.id === productId);

const getProducts = () => products;

const createProduct = (product) => products.push(product);

const isValidProductId = (productId) => {
  if (productId !== 0 && !productId) {
    return false;
  }

  const product = getProductById(productId);

  return !!product;
};

export default {
  getProductById,
  getProducts,
  createProduct,
  isValidProductId,
};
