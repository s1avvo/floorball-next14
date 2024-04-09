"use server";
import { executeGraphql } from "@/api/graphqlApi";
import { ArticleGetListWithPaginationDocument } from "@/gql/graphql";

export const getNewsAction = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListWithPaginationDocument,
		variables: { first, skip },
	});

	return graphqlResponse.allArticles;
};
