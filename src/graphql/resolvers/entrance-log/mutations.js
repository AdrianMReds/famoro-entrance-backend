import { EntranceLog } from "@models";

const entranceLogMutations = {
  createEntranceLog: async (_, { entranceLog }, { loaders }) => {
    const newEntranceLog = new EntranceLog(entranceLog);

    const savedEntranceLog = await newEntranceLog.save();

    return loaders.entranceLog.one(savedEntranceLog._id);
  },
  // Los entranceLogs no se pueden modificar
};

export default entranceLogMutations;
