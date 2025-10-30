import type { DatabaseClient } from "../lib/client";
import { bifiBuyback } from "../generated/schema";
import { and, gte, lte } from "drizzle-orm";
import * as R from "remeda";
import BigNumber from "bignumber.js";

export const createFindBuybacksAction = ({ db }: { db: DatabaseClient }) => {
    return async function findBuybacks(params: {
        after: Date;
        before: Date;
    }) {
        const { after, before } = params;

        const buybacks = await db.query.bifiBuyback.findMany({
            columns: {
                txnTimestamp: true,
                bifiAmount: true,
                bifiPrice: true,
            },
            where: and(
                gte(bifiBuyback.txnTimestamp, after.toISOString()),
                lte(bifiBuyback.txnTimestamp, before.toISOString()),
            ),
        });

        return {
            buybacks: R.pipe(buybacks, R.map(b => ({
                date: new Date(Number(b.txnTimestamp) * 1000),
                bifiAmount: new BigNumber(b.bifiAmount ?? 0),
                bifiPrice: new BigNumber(b.bifiPrice ?? 0),
            }))),
        }
    }
}