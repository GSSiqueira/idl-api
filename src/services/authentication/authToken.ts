import * as jwt from "jsonwebtoken";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

export function generateAuthToken(
  username: string,
  isAdmin: boolean,
  timeToExpire: number
) {
  const token = jwt.sign({ username, isAdmin }, "INSERT-SECRET-HERE", {
    expiresIn: timeToExpire,
  });
  return token;
}

export function validateAuthToken(authToken: string) {
  return;
}
