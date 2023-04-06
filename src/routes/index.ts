import { Router } from "express";
import userRoutes from "./userRoutes.ts";
import filmRoutes from "./filmRoutes.ts";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/films", filmRoutes);

export default routes;