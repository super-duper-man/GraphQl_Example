const orders = [
  {
    date: "2015-05-08",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "leatherShow",
          description: "Old Leather Shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}
module.exports = { getAllOrders };
