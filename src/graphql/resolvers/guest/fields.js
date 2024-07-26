const guestFields = {
  Guest: {
    user: async ({ user }, _, { loaders }) => {
      return loaders.user.one(user);
    },
    establishment: async ({ establishment }, _, { loaders }) => {
      return loaders.establishment.one(establishment);
    },
  },
};

export default guestFields;
