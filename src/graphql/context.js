import { AuthenticationError } from "apollo-server-express";
import { verify } from "jsonwebtoken";
import { secret } from "../config/environment";

const context = async ({ req, res }) => {
  let token;
  const authorization = req.headers.authorization;

  if (authorization) {
    [, token] = authorization.split("Bearer ");
  }
  if (!token) {
    throw new AuthenticationError(
      "GraphQL API is only accessible with an access token"
    );
  }

  const user = verify(token, secret);

  const authScope = user.type;

  return { user, authScope };
};

export default context;
