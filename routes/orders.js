import express from 'express';
import ordersHandler from '../handlers/orders';

const router = express.Router();

/* POST create an order. */
router.post('/', ordersHandler.createOrder);

module.exports = router;
