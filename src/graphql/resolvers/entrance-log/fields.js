const entranceLogFields = {
  EntranceLog: {
    establishment: async ({ establishment }, _, { loaders }) => {
      return loaders.establishment.one(establishment);
    },
    user: async ({ user }, _, { loaders }) => {
      return loaders.user.one(user);
    },
    access: async ({ access }, _, { loaders }) => {
      return loaders.access.one(access);
    },
    guest: async ({ guest }, _, { loaders }) => {
      return loaders.guest.one(guest);
    },
  },
};

export default entranceLogFields;
