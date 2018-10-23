// connects to remote Prisma db and allows JS queries

const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "/src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

modules.exports = db;