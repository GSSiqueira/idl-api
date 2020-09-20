import express from 'express';
import router from './routes';
import 'reflect-metadata';

import { createConnection } from 'typeorm';

const app = express();
createConnection()
  .then((connection) => {
    app.use(express.json());
    app.use(router);

    app.listen(3030);
  })
  .catch((error) => console.log(error));
