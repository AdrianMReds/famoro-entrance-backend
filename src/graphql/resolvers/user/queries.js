import { User } from "@models";

const userQueries = {
  users: async (_, args, { user, authScope }) => {
    const users = User.find();

    console.log(user);
    console.log(authScope);

    return users;
  },
  user: async (_, { id }) => {
    const user = User.findById(id);
    return user;
  },
};

export default userQueries;
