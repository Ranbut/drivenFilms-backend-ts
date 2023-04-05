import { Router } from 'express';
import schemaValidation from '../middlewares/schemaMiddleware.ts';
import filmController from '../controllers/filmController.ts';
import Film from '../schemas/Film.ts';

const filmRoutes = Router();

filmRoutes.get('/', filmController.findAll);
filmRoutes.post('/', schemaValidation(Film.add), filmController.add);

export default filmRoutes;