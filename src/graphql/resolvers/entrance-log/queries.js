import { EntranceLog } from "@models";

const entranceLogQueries = {
  entranceLogs: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const entranceLogs = await EntranceLog.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.entranceLog.many(entranceLogs.map(({ id }) => id));
      },
      info: async () => {
        const count = await EntranceLog.countDocuments();

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
  entranceLog: async (_, { id }, { loaders }) => loaders.entranceLog.one(id),
};

export default entranceLogQueries;
