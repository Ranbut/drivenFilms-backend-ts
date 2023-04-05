import { NextFunction, Request, Response } from "express";
import filmServices from "../services/filmServices.ts";

export async function findAll (req: Request, res: Response, next: NextFunction) {
    try{

         const films = await filmServices.findAll();

         return res.status(200).send(films);
    }
    
    catch(err){
        next(err);
    }
}

export async function add (req: Request, res: Response, next: NextFunction) {
    try{
        const film = req.body;

        await filmServices.add(film);

        return res.sendStatus(201);
    }
    catch(err){
        next(err);
  }
}

export default{
    findAll,
    add
};