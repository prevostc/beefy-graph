import { z } from 'zod';
import { logLevelSchema } from '@beefy/logger';

// Configuration schema
const configSchema = z.object({
    APP_ENV: z.enum(['development', 'production']).default('development'),
    LOG_LEVEL: logLevelSchema.optional().default('info'),
    DB_DEV_URL: z.string(),
    DB_DEV_SSL: z.boolean().default(false),
});

// Environment variables type
type Config = z.infer<typeof configSchema>;

// Parse environment variables with fallbacks
const parseEnvVars = (): Config => {
    const env = {
        APP_ENV: process.env.APP_ENV ?? process.env.NODE_ENV ?? 'development',
        LOG_LEVEL: process.env.LOG_LEVEL,
        DB_DEV_URL: process.env.DB_DEV_URL,
    };

    const result = configSchema.safeParse(env);

    if (!result.success) {
        console.error('Configuration validation failed:', result.error);
        // Instead of throwing, return default values
        return configSchema.parse({});
    }

    return result.data;
};

// Export validated configuration
export const config = parseEnvVars();
