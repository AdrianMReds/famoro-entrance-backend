import { userQueries, userMutations } from "./user";
import { establishmentQueries, establishmentMutations } from "./establishment";
import { accessQueries } from "./access";
import accessMutations from "./access/mutations";

const resolvers = {
  Query: {
    ...userQueries,
    ...establishmentQueries,
    ...accessQueries,
  },
  Mutation: {
    ...userMutations,
    ...establishmentMutations,
    ...accessMutations,
  },
};

export default resolvers;
