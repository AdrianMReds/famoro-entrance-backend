import { User } from "@models";

const userQueries = {
  users: async (_, args) => {
    const users = User.find();

    return users;
  },
  user: async (_, { id }) => {
    const user = User.findById(id);
    return user;
  },
};

export default userQueries;
