import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import path from 'path';
import { fileURLToPath } from 'url';
import { resolvers } from './resolvers';
import { addResolversToSchema } from '@graphql-tools/schema'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schemaDir = path.join(__dirname, '..', 'schemas');
const gqlFiles = [
    'common.graphql',

    'chain.graphql',
    'user.graphql',
    'token.graphql',

    'partner.graphql',
    'platform.graphql',

    'product.graphql',
    'promo.graphql',

    'position.graphql',

    'apy.graphql',
    'historical.graphql',
    'lastharvest.graphql',
    'points.graphql',
    'price.graphql',
    'revenue.graphql',
    'tvl.graphql',
].map(file => path.join(schemaDir, file));


export const schema = addResolversToSchema({
    schema: loadSchemaSync(gqlFiles, {
        loaders: [new GraphQLFileLoader()],
    }),
    resolvers,
})