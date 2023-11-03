import ordersService from '../services/orders';

const createOrder = (req, res) => {
  const { body: { items = [] } = {} } = req;

  const validationResult = ordersService.validateOrder(items);

  if (!validationResult.isValid) {
    return res.send({
      error: 'Invalid order',
      invalidItems: validationResult.invalidItems,
    });
  }

  const enrichedOrder = ordersService.createOrder(items);

  return res.send(enrichedOrder);
};

export default { createOrder };
