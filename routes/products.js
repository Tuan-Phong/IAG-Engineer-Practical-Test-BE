import express from 'express';
import productsHandler from '../handlers/products';

const router = express.Router();

/* GET retrieve a list products. */
router.get('/', productsHandler.getProducts);

/* POST create a product. */
router.post('/', productsHandler.createProducts);

module.exports = router;
