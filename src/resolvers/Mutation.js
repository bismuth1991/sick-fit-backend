const Mutations = {
  createItem: async (parent, args, ctx, info) => {
    // TODO: check if user is logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args,
      },
    }, info);

    return item;
  },
};

module.exports = Mutations;
