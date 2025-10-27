import { globalResolvers } from './global';
import type { Resolvers } from './types.generated'
import { mergeResolvers } from '@graphql-tools/merge';
import { scalarsTypeDefs } from '../lib/scalars';

export const resolvers: Resolvers = mergeResolvers([
    globalResolvers,
    scalarsTypeDefs
]);
