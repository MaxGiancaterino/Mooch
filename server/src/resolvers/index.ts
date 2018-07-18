import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { group } from "./Mutation/group"
import { AuthPayload } from "./AuthPayload"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...group
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
