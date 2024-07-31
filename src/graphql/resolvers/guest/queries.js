import { Guest } from "@models";

const guestQueries = {
  guests: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const guests = await Guest.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.guest.many(guests.map(({ id }) => id));
      },
      info: async () => {
        const count = await Guest.countDocuments();

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
  guest: async (_, { id }, { loaders }) => loaders.guest.one(id),
};

export default guestQueries;
