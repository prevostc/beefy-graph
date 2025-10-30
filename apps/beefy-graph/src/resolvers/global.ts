import DataLoader from "dataloader";
import type { ServerContext } from "../lib/context"
import type { Resolvers } from "./types.generated"
import * as R from 'remeda';
import type { DbDevClient } from "@beefy/db-dev-client";


export const createWeeklyBuybackLoader = ({ dbDev }: { dbDev: DbDevClient }) => {
    return new DataLoader(
        async (keys: readonly number[]) => {
            const now = new Date();
            const after = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

            const { buybacks } = await dbDev.bifi.findBuybacks({
                after,
                before: now,
            });

            return R.pipe(keys, R.map(() => ({ buybacks })));
        },
        {
            // Cache results for 5 minutes
            cache: true,
            maxBatchSize: 100,
        }
    );
};


export const globalResolvers: Resolvers<ServerContext> = {
    Query: {
        global: () => {
            return {} as any
        }
    },
    Global: {
        weeklyMooBifiBuybackAmount: async (_, __, { dataloaders }) => {
            const { buybacks } = await dataloaders.weeklyBuyback.load(0)

            return R.pipe(
                buybacks,
                R.map(b => b.bifiAmount.toNumber()),
                R.sum(),
            );
        },
        weeklyMooBifiBuybackUSD: async (_, __, { dataloaders }) => {
            const { buybacks } = await dataloaders.weeklyBuyback.load(0)

            return R.pipe(
                buybacks,
                R.map(b => b.bifiPrice.times(b.bifiAmount).toNumber()),
                R.sum(),
            );
        },
    }
}

