import { EntranceLog } from "@models";

const entranceLogQueries = {
  entranceLogs: async (_, args) => {
    const entranceLogs = EntranceLog.find();
    return entranceLogs;
  },
  entranceLog: async (_, { id }) => {
    const entranceLog = EntranceLog.findById(id);
    return entranceLog;
  },
};

export default entranceLogQueries;
