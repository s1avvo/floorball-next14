import { executeGraphql } from "./graphqlApi";
import { DocumentGetListDocument } from "@/gql/graphql";

export const getDocumentList = async () => {
	const graphqlResponse = await executeGraphql({
		query: DocumentGetListDocument,
		next: { tags: ["document"] },
	});

	return graphqlResponse.allDocuments;
};
