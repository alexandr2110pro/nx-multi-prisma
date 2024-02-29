import { PrismaClient } from '@prisma/client/bar';

export const prismaBar = new PrismaClient({
  log: ['error', 'warn', 'info',],
  errorFormat: 'pretty'
})
