import { userQueries, userMutations } from "./user";
import { establishmentQueries, establishmentMutations } from "./establishment";

const resolvers = {
  Query: {
    ...userQueries,
    ...establishmentQueries,
  },
  Mutation: {
    ...userMutations,
    ...establishmentMutations,
  },
};

export default resolvers;
