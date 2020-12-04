import * as jwt from 'jsonwebtoken';

export function generateAuthToken(
  username: string,
  isAdmin: boolean,
  timeToExpire: number
) {
  const token = jwt.sign({ username, isAdmin }, 'INSERT-SECRET-HERE', {
    expiresIn: timeToExpire,
  });
  return token;
}
