import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './schemas/**/*.graphql',
    generates: {
        './src/resolvers/types.generated.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
            config: {
                scalars: {
                    DateTime: {
                        input: 'Date | string',
                        output: 'Date | string'
                    },
                    HexString: {
                        input: 'string',
                        output: 'string'
                    },
                    BigDecimal: {
                        input: 'string',
                        output: 'string'
                    },
                    BigInt: {
                        input: 'string',
                        output: 'string'
                    },
                    URL: {
                        input: 'string',
                        output: 'string'
                    },
                }
            }
        }
    }
}

export default config