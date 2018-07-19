import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { group } from "./Mutation/group"
import { payment } from "./Mutation/payment"
import { AuthPayload } from "./AuthPayload"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...group,
    ...payment
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
