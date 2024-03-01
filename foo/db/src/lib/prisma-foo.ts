import { PrismaClient } from '@nx-multi-prisma/foo/prisma-client';

export const prismaFoo = new PrismaClient({
  log: ['error', 'warn', 'info'],
  errorFormat: 'pretty',
});
