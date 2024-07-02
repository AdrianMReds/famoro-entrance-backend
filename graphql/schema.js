import { join, dirname } from "path";
import { readdirSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers/index.js";

// Convierte import.meta.url a una ruta de archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gqlFiles = readdirSync(join(__dirname, "./typedefs"));

let typeDefs = "";

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, "./typedefs", file), {
    encoding: "utf-8",
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
