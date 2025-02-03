const userFields = {
  User: {
    establishment: async ({ establishment }, _, { loaders }) => {
      if (establishment) {
        return loaders.establishment.one(establishment);
      } else {
        return null;
      }
    },
  },
};

export default userFields;
