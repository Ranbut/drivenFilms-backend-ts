import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.ts";
import { handleApplicationErrors } from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(routes);
app.use(handleApplicationErrors);

const port : string | number = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at the port: ${port}`));