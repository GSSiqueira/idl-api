import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface authTokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    response.status(401).send({
      message: "User not logged in!",
    });
  } else {
    const authToken = authorization.replace("Bearer", "").trim();

    try {
      const tokenData = jwt.verify(authToken, "INSERT-SECRET-HERE");
      console.debug("AuthMiddleware", tokenData);
      return next();
    } catch {
      response.status(401).send({
        message: "User not logged in!",
      });
    }
  }
}
