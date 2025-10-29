import type { Logger } from '@beefy/logger';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schemas from '../generated/schema';

const poolPerDbUrl = new Map<string, Pool>();

export const createDatabaseClient = async ({ dbUrl, logger }: { dbUrl: string; logger: Logger }) => {
    if (!poolPerDbUrl.has(dbUrl)) {
        logger.info({ msg: 'Creating new pool for pg database' });
        const pool = new Pool({
            connectionString: dbUrl,
            ssl: {
                rejectUnauthorized: false
            },
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 1000,
            maxLifetimeSeconds: 60,
        });
        poolPerDbUrl.set(dbUrl, pool);
    }
    // biome-ignore lint/style/noNonNullAssertion: the pool exists here
    const pool = poolPerDbUrl.get(dbUrl)!;

    return await drizzle(pool, { schema: schemas });
};

export type DatabaseClient = Awaited<ReturnType<typeof createDatabaseClient>>;
