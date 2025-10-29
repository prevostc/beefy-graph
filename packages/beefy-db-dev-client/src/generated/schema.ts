import { pgTable, uniqueIndex, integer, timestamp, smallint, char, numeric, smallserial, varchar, bigint, boolean, index, foreignKey, serial, doublePrecision, text, bigserial, pgMaterializedView, pgView } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const bifiBuyback = pgTable("bifi_buyback", {
	id: integer().generatedByDefaultAsIdentity({ name: "bifi_buyback_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	blockNumber: integer("block_number").notNull(),
	txnTimestamp: timestamp("txn_timestamp", { withTimezone: true, mode: 'string' }).notNull(),
	eventIdx: smallint("event_idx"),
	txnHash: char("txn_hash", { length: 66 }).notNull(),
	bifiAmount: numeric("bifi_amount", { precision: 26, scale: 18 }).notNull(),
	bifiPrice: numeric("bifi_price", { precision: 26, scale: 18 }).notNull(),
	buybackTotal: numeric("buyback_total", { precision: 26, scale: 18 }).generatedAlwaysAs(sql`(bifi_amount * bifi_price)`),
}, (table) => [
	uniqueIndex("bifi_buyback_idx_txn_timestamp_event_idx").using("btree", table.txnTimestamp.desc().nullsFirst().op("timestamptz_ops"), table.eventIdx.asc().nullsLast().op("int2_ops"), table.txnTimestamp.asc().nullsLast().op("timestamptz_ops")),
]);

export const chainsOld = pgTable("chains_old", {
	chainId: smallserial("chain_id").notNull(),
	name: varchar({ length: 32 }),
});

export const chains = pgTable("chains", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }).notNull(),
	name: varchar({ length: 32 }).notNull(),
	beefyName: char("beefy_name", { length: 32 }).default('').notNull(),
	enabled: boolean().default(true),
});

export const harvests = pgTable("harvests", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	blockNumber: integer("block_number"),
	txnIdx: smallint("txn_idx"),
	eventIdx: smallint("event_idx"),
	txnTimestamp: timestamp("txn_timestamp", { withTimezone: true, mode: 'string' }),
	txnHash: char("txn_hash", { length: 66 }),
	vaultId: varchar("vault_id", { length: 64 }),
	callFee: numeric("call_fee", { precision: 30, scale: 18 }),
	gasFee: numeric("gas_fee", { precision: 30, scale: 18 }),
	platformFee: numeric("platform_fee", { precision: 24, scale: 18 }),
	strategistFee: numeric("strategist_fee", { precision: 24, scale: 18 }),
	harvestAmount: numeric("harvest_amount", { precision: 36, scale: 18 }),
	nativePrice: numeric("native_price", { precision: 26, scale: 18 }),
	wantPrice: numeric("want_price", { precision: 40, scale: 18 }),
	isCowllector: boolean("is_cowllector").default(false),
	strategistAddress: char("strategist_address", { length: 42 }),
}, (table) => [
	index("harvests_chain_id_txn_timestamp_index").using("btree", sql`chain_id`, sql`((timezone('UTC'::text, txn_timestamp))::date)`),
	index("idx_harvests_chain_ts_block").using("btree", table.chainId.asc().nullsLast().op("int8_ops"), table.txnTimestamp.desc().nullsFirst().op("int4_ops"), table.blockNumber.asc().nullsLast().op("int4_ops"), table.txnTimestamp.asc().nullsLast().op("int4_ops")),
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "fk_chains_new"
	}).onUpdate("cascade"),
]);

export const multichainAudit = pgTable("multichain_audit", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }).notNull(),
	txnHash: char("txn_hash", { length: 66 }).notNull(),
	fromAddress: char("from_address", { length: 42 }),
	value: numeric(),
	status: smallint(),
	toAddress: varchar("to_address", { length: 42 }).default(sql`NULL`),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "multichain_audit_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const launchpoolDeposits = pgTable("launchpool_deposits", {
	id: serial().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	poolAddress: char("pool_address", { length: 42 }),
	blockNumber: integer("block_number"),
	txnHash: char("txn_hash", { length: 66 }),
	logIndex: integer("log_index"),
	fromAddress: char("from_address", { length: 42 }),
}, (table) => [
	uniqueIndex("launchpool_deposits_chain_id_pool_address_from_address_idx").using("btree", table.chainId.asc().nullsLast().op("bpchar_ops"), table.poolAddress.asc().nullsLast().op("int8_ops"), table.fromAddress.asc().nullsLast().op("bpchar_ops")),
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "launchpool_deposits_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const tvls = pgTable("tvls", {
	vaultId: integer("vault_id").notNull(),
	t: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	val: doublePrecision(),
});

export const priceOracles = pgTable("price_oracles", {
	id: serial().notNull(),
	oracleId: varchar("oracle_id", { length: 64 }).notNull(),
	tokens: text().array().default([""]).notNull(),
}, (table) => [
	uniqueIndex("idx_price_oracles").using("btree", table.oracleId.asc().nullsLast().op("text_ops")),
]);

export const vaultIds = pgTable("vault_ids", {
	id: serial().notNull(),
	vaultId: varchar("vault_id", { length: 64 }).notNull(),
}, (table) => [
	uniqueIndex("idx_vault_ids").using("btree", table.vaultId.asc().nullsLast().op("text_ops")),
]);

export const chainIds = pgTable("chain_ids", {
	id: serial().notNull(),
	chainId: varchar("chain_id", { length: 64 }).notNull(),
}, (table) => [
	uniqueIndex("idx_chain_ids").using("btree", table.chainId.asc().nullsLast().op("text_ops")),
]);

export const apys = pgTable("apys", {
	vaultId: integer("vault_id").notNull(),
	t: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	val: doublePrecision(),
});

export const prices = pgTable("prices", {
	oracleId: integer("oracle_id").notNull(),
	t: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	val: doublePrecision(),
});

export const tvlByChain = pgTable("tvl_by_chain", {
	chainId: integer("chain_id").notNull(),
	t: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	total: doublePrecision(),
	vault: doublePrecision(),
	gov: doublePrecision(),
	clm: doublePrecision(),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chainIds.id],
		name: "tvl_by_chain_chain_id_fkey"
	}),
]);

export const revenue = pgTable("revenue", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }).notNull(),
	blockNumber: integer("block_number").notNull(),
	txnIdx: smallint("txn_idx").notNull(),
	eventIdx: smallint("event_idx").notNull(),
	txnHash: char("txn_hash", { length: 66 }),
	token: char({ length: 42 }),
	tokenPrice: doublePrecision("token_price"),
	tokenAmount: numeric("token_amount"),
	revenueType: varchar("revenue_type", { length: 10 }),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "fk_chains"
	}).onUpdate("cascade"),
]);

export const lpbifiTransfers = pgTable("lpbifi_transfers", {
	id: bigserial({ mode: "bigint" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	token: char({ length: 42 }),
	blockNumber: integer("block_number"),
	txnHash: char("txn_hash", { length: 66 }),
	logIndex: integer("log_index"),
	fromAddress: char("from_address", { length: 42 }),
	toAddress: char("to_address", { length: 42 }),
	value: numeric(),
}, (table) => [
	index("lpbifi_transfers_token").using("btree", table.token.asc().nullsLast().op("bpchar_ops")),
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "lpbifi_transfers_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const moolpbifiTransfers = pgTable("moolpbifi_transfers", {
	id: bigserial({ mode: "bigint" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	token: char({ length: 42 }),
	blockNumber: integer("block_number"),
	txnHash: char("txn_hash", { length: 66 }),
	logIndex: integer("log_index"),
	fromAddress: char("from_address", { length: 42 }),
	toAddress: char("to_address", { length: 42 }),
	value: numeric(),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "moolpbifi_transfers_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const addressMetadata = pgTable("address_metadata", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }).notNull(),
	address: char({ length: 42 }).notNull(),
	isContract: boolean("is_contract"),
	label: varchar({ length: 50 }),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "address_metadata_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const bifiTransfers = pgTable("bifi_transfers", {
	id: bigserial({ mode: "bigint" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	blockNumber: integer("block_number"),
	txnHash: char("txn_hash", { length: 66 }),
	logIndex: integer("log_index"),
	fromAddress: char("from_address", { length: 42 }),
	toAddress: char("to_address", { length: 42 }),
	value: numeric(),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "bifi_transfers_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const migrations = pgTable("migrations", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	version: bigint({ mode: "number" }).notNull(),
	name: text(),
	md5: text(),
	runAt: timestamp("run_at", { withTimezone: true, mode: 'string' }),
});

export const moobifiTransfers = pgTable("moobifi_transfers", {
	id: bigserial({ mode: "bigint" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	chainId: bigint("chain_id", { mode: "number" }),
	token: char({ length: 42 }),
	blockNumber: integer("block_number"),
	txnHash: char("txn_hash", { length: 66 }),
	logIndex: integer("log_index"),
	fromAddress: char("from_address", { length: 42 }),
	toAddress: char("to_address", { length: 42 }),
	value: numeric(),
}, (table) => [
	foreignKey({
		columns: [table.chainId],
		foreignColumns: [chains.chainId],
		name: "moobifi_transfers_chain_id_fkey"
	}).onUpdate("cascade"),
]);

export const lpBreakdowns = pgTable("lp_breakdowns", {
	oracleId: integer("oracle_id").notNull(),
	t: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	balances: doublePrecision().array(),
	totalSupply: doublePrecision("total_supply"),
}, (table) => [
	foreignKey({
		columns: [table.oracleId],
		foreignColumns: [priceOracles.id],
		name: "lp_breakdowns_oracle_id_fkey"
	}),
]);

export const zap = pgTable("zap", {
	blockNumber: integer("block_number").notNull(),
	txnIdx: smallint("txn_idx").notNull(),
	txnHash: char("txn_hash", { length: 66 }).notNull(),
	txnTime: timestamp("txn_time", { mode: 'string' }),
	address: char({ length: 42 }).notNull(),
	vaultId: varchar("vault_id"),
	tokenAmount: numeric("token_amount"),
	mooAmount: numeric("moo_amount"),
	usdAmount: numeric("usd_amount"),
	isZap: boolean("is_zap").default(true),
});
export const apysAggMv = pgMaterializedView("apys_agg_mv", {
	vaultId: integer("vault_id"),
	avg7D: doublePrecision("avg_7d"),
	avg30D: doublePrecision("avg_30d"),
	avg90D: doublePrecision("avg_90d"),
}).as(sql`SELECT apys.vault_id, COALESCE(avg(apys.val::numeric) FILTER (WHERE apys.t >= (now() - '7 days'::interval))::double precision, 0::double precision) AS avg_7d, COALESCE(avg(apys.val::numeric) FILTER (WHERE apys.t >= (now() - '30 days'::interval))::double precision, 0::double precision) AS avg_30d, COALESCE(avg(apys.val::numeric) FILTER (WHERE apys.t >= (now() - '90 days'::interval))::double precision, 0::double precision) AS avg_90d FROM apys GROUP BY apys.vault_id`);
