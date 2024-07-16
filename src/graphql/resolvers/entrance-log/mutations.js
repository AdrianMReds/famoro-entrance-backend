import { EntranceLog } from "@models";

const entranceLogMutations = {
  createEntranceLog: async (_, { entranceLog }) => {
    const newEntranceLog = new EntranceLog(entranceLog);
    return newEntranceLog.save();
  },
  // Los entranceLogs no se pueden modificar
};

export default entranceLogMutations;
