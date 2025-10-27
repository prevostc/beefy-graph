import pino from 'pino';
import { z } from 'zod';

type LogFn = (
    // biome-ignore lint/suspicious/noExplicitAny: needed to avoid exporting pino types
    message: { msg: string } & Record<string, any>,
    // biome-ignore lint/suspicious/noExplicitAny: needed to avoid exporting pino types
    ...args: any[]
) => void;

export type Logger = {
    info: LogFn;
    warn: LogFn;
    error: LogFn;
    debug: LogFn;
    trace: LogFn;
};

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error';
export const allLogLevels: LogLevel[] = ['trace', 'debug', 'info', 'warn', 'error'];
export const logLevelSchema = z
    .enum(allLogLevels as [LogLevel, ...LogLevel[]])
    .optional()
    .default('info');

export const createLogger = ({ name, level }: { name: string; level?: LogLevel }): Logger => {
    const logLevel = logLevelSchema.parse(level || process.env.LOG_LEVEL || 'info');
    return pino({
        name,
        level: logLevel,
    });
};
