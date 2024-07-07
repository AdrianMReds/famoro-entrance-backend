import { Establishment } from "@models";

const establishmentQueries = {
  establishments: async (_, args, { authScope }) => {
    const establishments = Establishment.find();

    return establishments;
  },
  establishment: async (_, { id }) => {
    const establishment = Establishment.findById(id);

    return establishment;
  },
};

export default establishmentQueries;
