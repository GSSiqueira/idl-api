import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'Hello Young World!' })
);

app.listen(3030);
