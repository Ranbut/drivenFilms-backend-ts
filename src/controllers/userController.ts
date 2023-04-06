import { NextFunction, Request, Response } from "express";
import userServices from "../services/userServices.ts";

export async function signUp (req: Request, res: Response, next: NextFunction) {

    try{
      const user = req.body;

      await userServices.signUp(user);

      return res.sendStatus(201);
    }
    
    catch(err){
      next(err);
    }
}

export async function login (req: Request, res: Response, next: NextFunction) {
    try{
      const user = req.body;

      const token: string = await userServices.login(user);

      return res.status(200).send(token);
    }
    catch(err){
      next(err);
  }
}

export default{
  signUp,
  login
};