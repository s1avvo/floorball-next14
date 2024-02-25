import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			"https://graphql.datocms.com/": {
				headers: {
					Authorization: process.env.NEXT_DATOCMS_API_TOKEN as string,
					"X-Exclude-Invalid": "true",
				},
			},
		},
	],
	documents: "src/graphql/**/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				defaultScalarType: "unknown",
				useTypeImports: true,
				skipTypename: true,
				documentMode: "string",
			},
		},
	},
};

export default config;
