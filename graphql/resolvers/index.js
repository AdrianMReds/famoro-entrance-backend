import { userQueries, userMutations } from "./user/index.js";

const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};

export default resolvers;
