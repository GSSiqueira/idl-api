import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { TOUserRepository } from '../repositories/implementations/TOUserRepository';

export default class UserController {
  authenticateUser(request: Request, response: Response) {
    getCustomRepository(TOUserRepository)
      .validateUser(request.body.username, request.body.password)
      .then((user) => {
        let userJSON = JSON.stringify(user);
        response.status(200).send(userJSON);
      })
      .catch((error) => {
        response.status(400).send({
          message: error.message,
        });
      });
  }

  addNewUser(request: Request, response: Response) {}

  removeUser(request: Request, response: Response) {}
}
