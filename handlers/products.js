import productsService from '../services/products';

const getProducts = (req, res) => {
  const products = productsService.getProducts();

  return res.send(products);
};

const createProducts = (req, res) => {
  const { body: product } = req;

  if (!productsService.isValidProductId(product.id)) {
    return res.send({
      error: 'Product ID already exists.',
    });
  }

  productsService.createProduct(product);

  return res.send(product);
};

export default { getProducts, createProducts };
