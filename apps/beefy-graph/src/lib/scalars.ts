
import { GraphQLBigInt, GraphQLDateTime, GraphQLHexadecimal, GraphQLURL } from 'graphql-scalars';

export const scalarsTypeDefs = {
    BigInt: GraphQLBigInt,
    DateTime: GraphQLDateTime,
    HexString: GraphQLHexadecimal,
    URL: GraphQLURL,
}