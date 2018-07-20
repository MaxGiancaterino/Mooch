import { Context } from "../../utils"

export const group = {
  async createGroup(parent, args, ctx: Context, info) {
    const group = await ctx.db.mutation.createGroup(args, info)

    return group
  },
  async updateGroup(parent, args, ctx: Context, info) {
    console.log(args)
    const group = await ctx.db.mutation.updateGroup(args, info)

    return group
  }
}
