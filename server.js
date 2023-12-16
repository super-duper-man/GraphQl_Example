const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = buildSchema(`
    type Query {
        description:  String
        price: Float
    }
`);

const root = {
  description: "Leather Shoe",
  price: 220.35,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
  })
);

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Running GraphQL server on ${PORT}`);
});
