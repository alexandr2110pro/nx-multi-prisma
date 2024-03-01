import { PrismaClient } from '@nx-multi-prisma/bar/prisma-client';

export const prismaBar = new PrismaClient({
  log: ['error', 'warn', 'info'],
  errorFormat: 'pretty',
});
