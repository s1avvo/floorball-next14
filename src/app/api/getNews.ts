import { draftMode } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
	ArticleCountDocument,
	ArticleGetBySlugDocument,
	ArticleGetFirstDocument,
	ArticleGetListDocument,
	ArticleGetListWithPaginationDocument,
	ArticleGetSlugListDocument,
} from "@/gql/graphql";

export const getNewsWithPagination = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListWithPaginationDocument,
		variables: { first, skip },
	});

	return graphqlResponse.allArticles;
};

export const getNewsFirst = async (quantity: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetFirstDocument,
		variables: { quantity },
		cache: "no-cache",
	});

	return graphqlResponse.allArticles;
};

export const getNewsCount = async () => {
	const graphqlResponse = await executeGraphql({ query: ArticleCountDocument, cache: "no-cache" });

	return graphqlResponse._allArticlesMeta.count;
};

export const getNewsBySlug = async (slug: string) => {
	const { isEnabled } = draftMode();

	const graphqlResponse = await executeGraphql({
		query: ArticleGetBySlugDocument,
		variables: { slug },
		headers: {
			...(isEnabled ? { "X-Include-Drafts": "true" } : {}),
		},
		cache: "no-cache",
	});

	return graphqlResponse.article;
};

export const getNewsAll = async () => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListDocument,
		cache: "no-cache",
	});

	return graphqlResponse.allArticles;
};

export const getNewsSlug = async () => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetSlugListDocument,
		cache: "no-cache",
	});

	return graphqlResponse.allArticles;
};
