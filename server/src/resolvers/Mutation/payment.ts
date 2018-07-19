import { Context } from "../../utils"

export const payment = {
  async createPayment(parent, args, ctx: Context, info) {
    const payment = await ctx.db.mutation.createPayment(args, info)

    return payment
  }
}
