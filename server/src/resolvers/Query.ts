import { Context, getUserId } from "../utils"
import { forwardTo } from "prisma-binding"

export default {
  me: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return await ctx.db.query.user({ where: { id } }, info)
  },
  users: async (parent, args, ctx: Context, info) => {
    return await ctx.db.query.users({ ...args }, info)
  },
  groups: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return await ctx.db.query.groups({ where: { members_some: { id } } }, info)
  },
  group: async (parent, args, ctx: Context, info) => {
    return await ctx.db.query.group(args, info)
  },
  payments: async (parent, args, ctx: Context, info) => {
    return await ctx.db.query.group({ where: { id: args.id } }, info)
  }
}
