import * as jwt from "jsonwebtoken";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

export function generateAuthToken(username: string, timeToExpire: number) {
  const token = jwt.sign({ username }, process.env.AUTH_SECRET_TEST, {
    expiresIn: timeToExpire,
  });
  return token;
}

export function validateAuthToken(authToken: string) {
  return;
}
