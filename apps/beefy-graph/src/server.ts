import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import Bun from 'bun';

const yoga = createYoga({ schema });


const server = Bun.serve({
    fetch(req) { return yoga.fetch(req); }
})

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)