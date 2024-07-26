import { EntranceLog } from "@models";

const entranceLogQueries = {
  entranceLogs: async (_, args, { loaders }) => {
    const entranceLogs = EntranceLog.find();

    return loaders.entranceLog.many(entranceLogs.map(({ id }) => id));
  },
  entranceLog: async (_, { id }, { loaders }) => loaders.entranceLog.one(id),
};

export default entranceLogQueries;
