import { User } from "@models";

const userQueries = {
  users: async (_, args, { user, authScope, loaders }) => {
    const users = await User.find();

    return loaders.user.many(users.map(({ id }) => id));
  },
  user: async (_, { id }) => {
    const user = User.findById(id);
    return user;
  },
};

export default userQueries;
