import { draftMode } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	ArticleCountDocument,
	ArticleGetBySlugDocument,
	ArticleGetFirstDocument,
	ArticleGetListDocument,
	ArticleGetListWithPaginationDocument,
	ArticleGetRecentListDocument,
	ArticleGetSlugListDocument,
} from "@/gql/graphql";

export const getNewsWithPagination = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListWithPaginationDocument,
		variables: { first, skip },
		next: { tags: ["article"] },
	});

	return graphqlResponse.allArticles;
};

export const getNewsFirst = async (quantity: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetFirstDocument,
		variables: { quantity },
		next: { tags: ["article"] },
	});

	return graphqlResponse.allArticles;
};

export const getNewsRecent = async (quantity: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetRecentListDocument,
		variables: { quantity },
		next: { tags: ["article"] },
	});

	return graphqlResponse.allArticles;
};

export const getNewsCount = async () => {
	const graphqlResponse = await executeGraphql({
		query: ArticleCountDocument,
		next: { tags: ["article"] },
	});

	return graphqlResponse._allArticlesMeta.count;
};

export const getNewsBySlug = async (slug: string) => {
	const { isEnabled } = await draftMode();

	const graphqlResponse = await executeGraphql({
		query: ArticleGetBySlugDocument,
		variables: { slug },
		headers: {
			...(isEnabled ? { "X-Include-Drafts": "true" } : {}),
		},
		next: { tags: ["article"] },
	});

	return graphqlResponse.article;
};

export const getNewsAll = async () => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListDocument,
		next: { tags: ["article"] },
	});

	return graphqlResponse.allArticles;
};

export const getNewsSlug = async () => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetSlugListDocument,
	});

	return graphqlResponse.allArticles;
};
