import { relations } from "drizzle-orm/relations";
import { chains, harvests, multichainAudit, launchpoolDeposits, chainIds, tvlByChain, revenue, lpbifiTransfers, moolpbifiTransfers, addressMetadata, bifiTransfers, moobifiTransfers, priceOracles, lpBreakdowns } from "./schema";

export const harvestsRelations = relations(harvests, ({ one }) => ({
	chain: one(chains, {
		fields: [harvests.chainId],
		references: [chains.chainId]
	}),
}));

export const chainsRelations = relations(chains, ({ many }) => ({
	harvests: many(harvests),
	multichainAudits: many(multichainAudit),
	launchpoolDeposits: many(launchpoolDeposits),
	revenues: many(revenue),
	lpbifiTransfers: many(lpbifiTransfers),
	moolpbifiTransfers: many(moolpbifiTransfers),
	addressMetadata: many(addressMetadata),
	bifiTransfers: many(bifiTransfers),
	moobifiTransfers: many(moobifiTransfers),
}));

export const multichainAuditRelations = relations(multichainAudit, ({ one }) => ({
	chain: one(chains, {
		fields: [multichainAudit.chainId],
		references: [chains.chainId]
	}),
}));

export const launchpoolDepositsRelations = relations(launchpoolDeposits, ({ one }) => ({
	chain: one(chains, {
		fields: [launchpoolDeposits.chainId],
		references: [chains.chainId]
	}),
}));

export const tvlByChainRelations = relations(tvlByChain, ({ one }) => ({
	chainId: one(chainIds, {
		fields: [tvlByChain.chainId],
		references: [chainIds.id]
	}),
}));

export const chainIdsRelations = relations(chainIds, ({ many }) => ({
	tvlByChains: many(tvlByChain),
}));

export const revenueRelations = relations(revenue, ({ one }) => ({
	chain: one(chains, {
		fields: [revenue.chainId],
		references: [chains.chainId]
	}),
}));

export const lpbifiTransfersRelations = relations(lpbifiTransfers, ({ one }) => ({
	chain: one(chains, {
		fields: [lpbifiTransfers.chainId],
		references: [chains.chainId]
	}),
}));

export const moolpbifiTransfersRelations = relations(moolpbifiTransfers, ({ one }) => ({
	chain: one(chains, {
		fields: [moolpbifiTransfers.chainId],
		references: [chains.chainId]
	}),
}));

export const addressMetadataRelations = relations(addressMetadata, ({ one }) => ({
	chain: one(chains, {
		fields: [addressMetadata.chainId],
		references: [chains.chainId]
	}),
}));

export const bifiTransfersRelations = relations(bifiTransfers, ({ one }) => ({
	chain: one(chains, {
		fields: [bifiTransfers.chainId],
		references: [chains.chainId]
	}),
}));

export const moobifiTransfersRelations = relations(moobifiTransfers, ({ one }) => ({
	chain: one(chains, {
		fields: [moobifiTransfers.chainId],
		references: [chains.chainId]
	}),
}));

export const lpBreakdownsRelations = relations(lpBreakdowns, ({ one }) => ({
	priceOracle: one(priceOracles, {
		fields: [lpBreakdowns.oracleId],
		references: [priceOracles.id]
	}),
}));

export const priceOraclesRelations = relations(priceOracles, ({ many }) => ({
	lpBreakdowns: many(lpBreakdowns),
}));