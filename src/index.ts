import "reflect-metadata";

import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";

import { PrismaClient } from "@prisma/client";

import createSchema from "./schema";

interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

async function main() {
  const yoga = createYoga({
    schema: await createSchema(),
    context: { prisma },
  });

  const server = createServer(yoga);

  const port = 3000;

  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
}

main();
