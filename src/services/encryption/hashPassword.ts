import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function validatePassword(
  passwordTyped: string,
  passwordFromDB: string
) {
  return await bcrypt.compare(passwordTyped, passwordFromDB);
}
