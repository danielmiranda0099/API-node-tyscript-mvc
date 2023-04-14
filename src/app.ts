import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes";
import { dbConnection as DB } from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();

app.use( cors() );
app.use( router );

DB().then( () => console.log("DB -------> OK"));

app.listen(PORT, () => console.log('server -----> OK'));