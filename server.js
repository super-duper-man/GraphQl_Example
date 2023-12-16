const express = require("express");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: async (parent) => {
        console.log(`Getting the products...`);
        const products = await Promise.resolve(parent.products);
        return products;
      },
      orders: (parent) => {
        console.log("Getting orders...");
        return parent.orders;
      },
    },
  },
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
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
