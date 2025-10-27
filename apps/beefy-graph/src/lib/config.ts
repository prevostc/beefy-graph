import { z } from 'zod';
import { logLevelSchema } from './logger';

// Configuration schema
const configSchema = z.object({
    // Logging
    LOG_LEVEL: logLevelSchema.optional().default('info'),
});

// Environment variables type
type Config = z.infer<typeof configSchema>;

// Parse environment variables with fallbacks
const parseEnvVars = (): Config => {
    const env = {
        LOG_LEVEL: process.env.LOG_LEVEL,
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
