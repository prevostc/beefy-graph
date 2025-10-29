import type { ServerContext } from "../lib/context"
import type { Global, Resolvers } from "./types.generated"
import * as R from "remeda"

export const globalResolvers: Resolvers<ServerContext> = {
    Query: {
        global: async (_, __, { dbDev }): Promise<Global> => {

            const now = new Date()
            const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
            const { buybacks } = await dbDev.bifi.findBuybacks({
                after: lastWeek,
                before: now,
            })

            const weeklyMooBifiBuybackAmount = R.pipe(
                buybacks,
                R.map(b => b.bifiAmount.toNumber()),
                R.sum(),
            )

            const weeklyMooBifiBuybackUSD = R.pipe(
                buybacks,
                R.map(b => b.bifiPrice.times(b.bifiAmount).toNumber()),
                R.sum(),
            )

            return ({
                totalTvlUSD: 0,
                monthlyRevenueUSD: 0,
                monthlyYieldUSD: 0,
                weeklyMooBifiBuybackAmount,
                weeklyMooBifiBuybackUSD,
                weeklyRevenueUSD: 0,
                weeklyYieldUSD: 0,
                historicalState: {
                    tvlUSD: [],
                    monthlyRevenueUSD: [],
                    monthlyYieldUSD: [],
                    weeklyMooBifiBuybackAmount: [],
                    weeklyMooBifiBuybackUSD: [],
                    weeklyRevenueUSD: [],
                    weeklyYieldUSD: [],
                },
            })
        }
    },
}