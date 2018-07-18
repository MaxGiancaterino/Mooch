import { Context } from "../../utils"

export const group = {
  async createGroup(parent, args, ctx: Context, info) {
    const group = await ctx.db.mutation.createGroup(args, info)

    return group
  }
}
