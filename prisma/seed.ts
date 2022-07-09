import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

main()
  .catch((err) => {
    throw err;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });

