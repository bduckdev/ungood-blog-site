import { randEmail, randFilePath, randPhrase, randUrl } from '@ngneat/falso';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.user.createMany({
    data: [{ email: randEmail() }, { email: randEmail() }],
  });

  const users = await prisma.user.findMany();

  const postPromises = users.map(async (user) => {
    await prisma.post.createMany({
      data: [
        {
          title: randPhrase(),
          content: randFilePath(),
          image: randUrl(),
          authorId: user.id,
        },
        {
          title: randPhrase(),
          content: randFilePath(),
          image: randUrl(),
          authorId: user.id,
        },
      ],
    });
  });

  await Promise.all(postPromises);

  await prisma.$disconnect();
})();
