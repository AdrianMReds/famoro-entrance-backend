import { Establishment } from "@models";

const establishmentQueries = {
  establishments: async (_, args, { authScope, loaders }) => {
    const establishments = Establishment.find();

    return loaders.establishment.many(establishments.map(({ id }) => id));
  },
  establishment: async (_, { id }, { loaders }) =>
    loaders.establishment.one(id),
};

export default establishmentQueries;
