import { Access } from "@models";

const accessQueries = {
  accesses: async (_, args) => {
    const accesses = Access.find();

    return accesses;
  },
  access: async (_, { id }) => {
    const access = Access.findById(id);
    return access;
  },
};

export default accessQueries;
