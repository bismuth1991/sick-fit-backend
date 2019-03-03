const { forwardTo } = require('prisma-binding');

/* eslint-disable no-unused-vars */
const Query = {
  items: forwardTo('db'),
  // items: async (parent, args, ctx, info) => {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
