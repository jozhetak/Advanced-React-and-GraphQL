const { forwardTo } = require("prisma-binding");

const Query = {
  // dogs(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   return global.dogs;
  // }

  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }

  items: forwardTo("db"),
  item: forwardTo("db")
};

module.exports = Query;
