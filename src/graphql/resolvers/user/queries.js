import { User } from "@models";

const userQueries = {
  users: async (_, args, { authScope, loaders }) => {
    const users = await User.find();

    return loaders.user.many(users.map(({ id }) => id));
  },
  user: async (_, { id }, { loaders }) => loaders.user.one(id),
};

export default userQueries;
