import { Access } from "@models";

const accessQueries = {
  accesses: async (_, args, { loaders }) => {
    const accesses = Access.find();

    return loaders.access.many(accesses.map(({ id }) => id));
  },
  access: async (_, { id }, { loaders }) => loaders.access.one(id),
};

export default accessQueries;
