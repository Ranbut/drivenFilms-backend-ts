import { NextFunction, Request, Response } from "express";
import userRepositories from "../repositories/userRepositories.ts";
import errors from "../errors/index.js";
import jwt, { JwtPayload } from "jsonwebtoken";

async function authValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) throw errors.unauthorizedError();

  const secret = process.env.SECRET_JWT || 'default_secret';

  jwt.verify(token, secret, async (error, decoded) => {
    try {
      if (error !== null) throw errors.unauthorizedError();

      const {
        rows: [user],
      } = await userRepositories.findById((decoded as JwtPayload).id);

      if (!user) throw errors.unauthorizedError();

      res.locals.user = user;
      next();
    } catch (err) {
      next(err);
    }
  });
}
  
  export default authValidation;