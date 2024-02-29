import { PrismaClient } from '@prisma/client/foo';

export const prismaFoo = new PrismaClient({
  log: ['error', 'warn', 'info'],
  errorFormat: 'pretty',
});
