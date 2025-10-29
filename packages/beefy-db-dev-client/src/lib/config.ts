import { parse } from 'pg-connection-string';
import type { Config } from 'drizzle-kit';

const config = {
    DATABASE_URL: process.env.DATABASE_URL!,
    ssl: {
        rejectUnauthorized: false
    }
} as const;

const { host, port, user, password, database } = parse(config.DATABASE_URL);

export const drizzleConfig: Config = {
    dialect: "postgresql",
    schema: "./src/schema.generated.ts",
    dbCredentials: {
        ssl: config.ssl,
        host: host ?? 'localhost',
        port: port ? Number(port) : 5432,
        user: user ?? 'postgres',
        password: password ?? 'postgres',
        database: database ?? 'postgres',
    },
    extensionsFilters: ["postgis"],
    schemaFilter: ["public"],
    tablesFilter: [
        "address_metadata",
        "apys",
        "apys_agg_mv",
        "bifi_buyback",
        "bifi_transfers",
        "chain_ids",
        "chains",
        "chains_old",
        "harvests",
        "lp_breakdowns",
        "lpbifi_transfers",
        "migrations",
        "moobifi_transfers",
        "moolpbifi_transfers",
        "price_oracles",
        "prices",
        "revenue",
        "tvl_by_chain",
        "tvls",
        "vault_ids",
        "zap",
    ],
};