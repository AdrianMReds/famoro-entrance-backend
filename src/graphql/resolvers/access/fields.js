const accessFields = {
  Access: {
    establishment: async ({ establishment }, _, { loaders }) => {
      return loaders.establishment.one(establishment);
    },
    user: async ({ user }, _, { loaders }) => {
      return loaders.user.one(user);
    },
    guest: async ({ guest }, _, { loaders }) => {
      return loaders.guest.one(guest);
    },
  },
};

export default accessFields;
