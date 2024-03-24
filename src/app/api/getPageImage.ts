import { executeGraphql } from "./graphqlApi";
import { PageImageGetListDocument } from "@/gql/graphql";

export const getPageImagesList = async (page: string) => {
	const graphqlResponse = await executeGraphql({
		query: PageImageGetListDocument,
		variables: { page },
	});

	return graphqlResponse.allPageImages;
};
