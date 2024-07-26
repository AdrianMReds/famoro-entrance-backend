const establishmentFields = {
  Establishment: {
    admins: async ({ admins }, _, { loaders }) => {
      return loaders.user.many(admins);
    },
  },
};

export default establishmentFields;
