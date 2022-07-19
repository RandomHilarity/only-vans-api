const { graphqlHTTP } = require('express-graphql');

const express = require("express");
const app = express();
const port = 4000;

app.use("/graphql", graphqlHTTP({
    graphiql: true
}))

app.listen(port, console.log(`Listening on Port ${port}`));