import { createLogger, type Logger } from "@beefy/logger"
import { createDbDevClient, type DbDevClient } from "@beefy/db-dev-client"
import { config } from "./config"
import { createDataloaders, type Dataloaders } from "./dataloaders"

export interface ServerContext {
    logger: Logger,
    dbDev: DbDevClient,
    dataloaders: Dataloaders
}

export interface UserContext {
}

export const createContext = async (): Promise<{ serverContext: ServerContext, userContext: UserContext }> => {
    const logger = createLogger({ name: 'yoga-server' })
    const dbDev = await createDbDevClient({ dbUrl: config.DB_DEV_URL })
    const dataloaders = createDataloaders({ dbDev })

    return {
        serverContext: {
            logger,
            dbDev,
            dataloaders,
        },
        userContext: {},
    }
}