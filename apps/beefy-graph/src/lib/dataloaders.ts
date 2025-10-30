import type { DbDevClient } from '@beefy/db-dev-client';
import { createWeeklyBuybackLoader } from '../resolvers/global';

export const createDataloaders = ({ dbDev }: { dbDev: DbDevClient }) => {
    return {
        weeklyBuyback: createWeeklyBuybackLoader({ dbDev }),
    };
};

export type Dataloaders = ReturnType<typeof createDataloaders>;