import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import Bun from 'bun';
import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';
import { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';
import { maxTokensPlugin } from '@escape.tech/graphql-armor-max-tokens';
import { maxAliasesPlugin } from '@escape.tech/graphql-armor-max-aliases';
import { maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth';
import { maxDirectivesPlugin } from '@escape.tech/graphql-armor-max-directives';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache'
import { useRateLimiter } from '@envelop/rate-limiter'
import { useMaskedErrors, useErrorHandler } from '@envelop/core'
import { createContext, type ServerContext, type UserContext } from './lib/context'

const { serverContext } = await createContext()

const yoga = createYoga<ServerContext, UserContext>({
    schema,
    plugins: [
        EnvelopArmorPlugin(),
        characterLimitPlugin({
            maxLength: 5000, // Number of characters allowed | Default: 15000
        }),
        maxTokensPlugin({
            n: 300,
        }),
        maxAliasesPlugin({
            n: 15, // Number of aliases allowed | Default: 15
        }),
        maxDepthPlugin({
            n: 3,
        }),
        maxDirectivesPlugin({
            n: 50, // Number of directives allowed | Default: 50
        }),
        useResponseCache({
            session: () => null,
            ttl: 1000 * 60 * 15 // global 15 minutes cache
        }),
        useRateLimiter({
            identifyFn: (context: any) => {
                return context.request.ip
            },
        }),
        useErrorHandler(({ errors, context, phase }) => {
            console.error(errors)
        }),
        useMaskedErrors()
    ],
    context: serverContext,
});


const server = Bun.serve({
    fetch(req) { return yoga.fetch(req); }
})

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)