import { Router } from 'express';
import schemaValidation from '../middlewares/schemaMiddleware.ts';
import filmController from '../controllers/filmController.ts';
import Film from '../schemas/Film.ts';
import authValidation from '../middlewares/authMiddleware.ts';

const filmRoutes = Router();

filmRoutes.get('/', filmController.findAll);
filmRoutes.post('/', schemaValidation(Film.add), filmController.add);
filmRoutes.put('/rent/:id', authValidation, filmController.rent);
filmRoutes.delete('/:id', filmController.remove);

export default filmRoutes;