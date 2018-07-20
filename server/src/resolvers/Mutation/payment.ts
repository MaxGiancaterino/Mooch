import { Context } from "../../utils"

export const payment = {
  async createPayment(parent, args, ctx: Context, info) {
    const payment = await ctx.db.mutation.createPayment(args, info)

    return payment
  },
  async updatePayment(parent, args, ctx: Context, info) {
    console.log(args)
    const payment = await ctx.db.mutation.updatePayment(args, info)

    return payment
  }
}
