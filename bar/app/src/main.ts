import express from 'express';

import { prismaBar } from '@nx-multi-prisma/bar/db';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3010;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/users', async (req, res) => {
  const { email } = req.body;
  const user = await prismaBar.barUser.create({
    data: { email },
  });

  res.send(user);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
