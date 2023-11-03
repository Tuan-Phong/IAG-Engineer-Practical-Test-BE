import productsService from './products';

const orders = [];

const calculateOrderWithTotals = (items) => {
  const productTotals = {};

  items.forEach((item) => {
    const { id, quantity } = item;
    const product = productsService.getProductById(id);

    const itemPrice = product.price * quantity;

    if (productTotals[id]) {
      productTotals[id].totalQuantity += quantity;
      productTotals[id].totalPrice += itemPrice;
    } else {
      productTotals[id] = {
        id,
        totalQuantity: quantity,
        totalPrice: itemPrice,
      };
    }
  });

  return productTotals;
};

const enrichOrder = (items) => calculateOrderWithTotals(items);

const createOrder = (items) => {
  const enrichedOrder = enrichOrder(items);

  orders.push(enrichedOrder);

  return orders;
};

const validateOrder = (items) => {
  const invalidItems = [];

  items.forEach((item) => {
    if (!productsService.isValidProductId(item.id)) {
      invalidItems.push(item.id);
    }
  });

  return {
    isValid: !invalidItems.length,
    invalidItems,
  };
};

export default {
  createOrder,
  validateOrder,
};
