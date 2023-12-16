const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
    {
      id: "leatherShoe",
      description: "Leather Shoe",
      price: 220.58,
    },
    {
      id: "blueJean",
      description: "Blue Jeans",
      price: 55.53,
    },
  ],
  orders: [
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
  ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Running GraphQL server on ${PORT}`);
});
