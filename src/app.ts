import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const port : string | number = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at the port: ${port}`));