import { createLogger } from "@beefy/logger";
import { createDatabaseClient } from "./lib/client";
import { createFindBuybacksAction } from "./action/findBuybacks";

export const createDbDevClient = async ({ dbUrl }: {
    dbUrl: string;
}) => {

    const logger = createLogger({ name: 'db-dev-client' });
    const db = await createDatabaseClient({ dbUrl, logger });

    return {
        bifi: {
            findBuybacks: createFindBuybacksAction({ db }),
        }
    }
}
export type DbDevClient = Awaited<ReturnType<typeof createDbDevClient>>;