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
        message: "Invalid Username!",
      });
    } else {
      const isPasswordValid = await validatePassword(
        password,
        userFromDB.password
      );
      if (!isPasswordValid) {
        response.status(401).send({
          message: "Invalid Password!",
        });
      } else {
        response.status(200).send({
          message: "User Logged In!",
          username: userFromDB.username,
          isAdmin: userFromDB.isAdmin,
          authtoken: generateAuthToken(userFromDB.username, 86400),
        });
      }
    }
  }

  /*  async authenticateUser(request: Request, response: Response) {
    getCustomRepository(TOUserRepository)
      .getUserByUsername(request.body.username)
      .then((user) => {
        let userJSON = JSON.stringify(user);
        validatePassword(request.body.password, user.password).then(
          (isValid) => {
            if (isValid) {
              response.status(200).send({
                message: "User Logged In!",
                username: user.username,
                isAdmin: user.isAdmin,
                authtoken: generateAuthToken(
                  user.username,
                  user.isAdmin,
                  86400
                ),
              });
            } else {
              response.status(401).send({
                message: "Invalid Password!",
              });
            }
          }
        );
      })
      .catch((error) => {
        console.debug(
          "UserController",
          "Invalid Username!!!" + request.body.username
        );
        response.status(401).send({
          message: "Invalid Username!",
        });
      });
  } */

  async addNewUser(request: Request, response: Response) {
    getCustomRepository(TOUserRepository)
      .addNewUser({
        username: request.body.username,
        password: await hashPassword(request.body.password),
        email: request.body.email,
        isAdmin: JSON.parse(request.body.isAdmin),
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
