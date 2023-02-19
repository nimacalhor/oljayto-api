import { buildSchema } from "type-graphql";

import { resolvers } from "@generated/type-graphql";

async function createSchema() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });
  return schema;
}

export default createSchema;
