import { ServerContext } from "../lib/context"
import { Global, Resolvers } from "./types.generated"

export const globalResolvers: Resolvers<ServerContext> = {
    Query: {
        global: (): Global => {
            console.log('global');
            return ({
                totalTvlUSD: 0,
                monthlyRevenueUSD: 0,
                monthlyYieldUSD: 0,
                weeklyMooBifiBuybackAmount: 0,
                weeklyMooBifiBuybackUSD: 0,
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