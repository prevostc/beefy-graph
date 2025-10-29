import { createLogger, type Logger } from "@beefy/logger"
import { createDbDevClient, type DbDevClient } from "@beefy/db-dev-client"
import { config } from "./config"

export interface ServerContext {
    logger: Logger,
    dbDev: DbDevClient
}

export interface UserContext {
}

export const createContext = async (): Promise<{ serverContext: ServerContext, userContext: UserContext }> => {
    const logger = createLogger({ name: 'yoga-server' })
    const dbDev = await createDbDevClient({ dbUrl: config.DB_DEV_URL })

    return {
        serverContext: {
            logger,
            dbDev,
        },
        userContext: {},
    }
}