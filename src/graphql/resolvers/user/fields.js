const userFields = {
  User: {
    establishment: async ({ establishment }, _, { loaders }) => {
      return loaders.establishment.one(establishment);
    },
  },
};

export default userFields;
