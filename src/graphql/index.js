import { ApolloServer } from "apollo-server-express";
import schema from "./schema.js";
import { env } from "../config/environment";

const playgroundSettings = {
  settings: {
    "editor.theme": "dark",
    "request.credentials": "include",
    "schema.polling.enable": false,
  },
};

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
});

export default apolloServer;
