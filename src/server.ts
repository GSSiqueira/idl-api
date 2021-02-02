import express from "express";
import router from "./routes";
import cors from "cors";
import "reflect-metadata";

import { createConnection } from "typeorm";

const app = express();
createConnection()
  .then(async (connection) => {
    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.listen(3030, () => {
      console.log(" --- Server listening at port 3030! --- ");
    });
  })
  .catch((error) => console.log(error));
