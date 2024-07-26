const establishmentFields = {
  Establishment: {
    admins: async ({ admins }, _, { loaders }) => {
      return loaders.user.many(admins.map(({ id }) => id));
    },
  },
};

export default establishmentFields;
