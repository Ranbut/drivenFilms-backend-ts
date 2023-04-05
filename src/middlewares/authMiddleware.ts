import { NextFunction, Request, Response } from "express";

async function authValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {

      next();
    } catch (err) {
      next(err);
    }
  };
  
  export default authValidation;