import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TOUserRepository } from "../repositories/implementations/TOUserRepository";
import { generateAuthToken } from "../services/authentication/authToken";
import {
  hashPassword,
  validatePassword,
} from "../services/encryption/hashPassword";

export default class UserController {
  async authenticateUser(request: Request, response: Response) {
    const { username, password } = request.body;
    const userFromDB = await getCustomRepository(
      TOUserRepository
    ).getUserByUsername(username);

    if (!userFromDB) {
      response.status(401).send({
        message: "Nome de usuário inválido.",
      });
    } else {
      const isPasswordValid = await validatePassword(
        password,
        userFromDB.password
      );
      if (!isPasswordValid) {
        response.status(401).send({
          message: "Senha inválida.",
        });
      } else {
        response.status(200).send({
          message: "Usuário logado!",
          username: userFromDB.username,
          isAdmin: userFromDB.isAdmin,
          authtoken: generateAuthToken(userFromDB.username, 86400),
        });
      }
    }
  }

  async addNewUser(request: Request, response: Response) {
    const { email, username, password, isAdmin } = request.body;

    if (!email) {
      response.status(400).send({
        message: "Email inválido.",
      });
      return;
    }
    if (!username) {
      response.status(400).send({
        message: "Nome de usuário inválido.",
      });
      return;
    }
    if (!password) {
      response.status(400).send({
        message: "Senha inválida.",
      });
      return;
    }

    getCustomRepository(TOUserRepository)
      .addNewUser({
        username,
        password: await hashPassword(password),
        email,
        isAdmin: JSON.parse(isAdmin),
      })
      .then((data) => {
        response.status(200).send(data);
      })
      .catch((error) => {
        response.status(400).send({
          message: error.message,
        });
      });
  }

  async removeUser(request: Request, response: Response) {}
}
