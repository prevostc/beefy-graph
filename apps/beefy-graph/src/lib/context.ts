import { createLogger, Logger } from "./logger"

export interface ServerContext {
    logger: Logger
}

export interface UserContext {
}

export const createContext = async (): Promise<{ serverContext: ServerContext, userContext: UserContext }> => {
    const logger = createLogger({ name: 'yoga-server' })
    return {
        serverContext: {
            logger,
        },
        userContext: {},
    }
}