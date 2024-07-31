import { Access } from "@models";

const accessQueries = {
  accesses: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const accesses = await Access.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.access.many(accesses.map(({ id }) => id));
      },
      info: async () => {
        const count = await Access.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  access: async (_, { id }, { loaders }) => loaders.access.one(id),
};

export default accessQueries;
