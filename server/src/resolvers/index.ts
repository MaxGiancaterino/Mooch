import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { AuthPayload } from "./AuthPayload"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
