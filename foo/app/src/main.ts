import express from 'express';

import { prismaFoo } from '@nx-multi-prisma/foo/db';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3020;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/users', async (req, res) => {
  const { email } = req.body;
  const user = await prismaFoo.fooUser.create({
    data: { email },
  });

  res.send(user);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
