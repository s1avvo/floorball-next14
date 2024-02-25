/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ArticleCount {\n  allArticles {\n    slug\n  }\n  _allArticlesMeta {\n    count\n  }\n}": types.ArticleCountDocument,
    "query ArticleGetBySlug($slug: String) {\n  article(filter: {slug: {eq: $slug}}) {\n    ...ArticleItem\n  }\n}": types.ArticleGetBySlugDocument,
    "query ArticleGetFirst($quantity: IntType) {\n  allArticles(first: $quantity, orderBy: createdat_DESC) {\n    ...ArticleItem\n  }\n}": types.ArticleGetFirstDocument,
    "query ArticleGetList {\n  allArticles {\n    ...ArticleItem\n  }\n}": types.ArticleGetListDocument,
    "query ArticleGetListWithPagination($first: IntType, $skip: IntType) {\n  allArticles(orderBy: createdat_DESC, first: $first, skip: $skip) {\n    ...ArticleItem\n  }\n}": types.ArticleGetListWithPaginationDocument,
    "query ArticleGetSlugList {\n  allArticles {\n    slug\n  }\n}": types.ArticleGetSlugListDocument,
    "fragment ArticleItem on ArticleRecord {\n  slug\n  title\n  text(markdown: true)\n  createdat\n  link\n}": types.ArticleItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleCount {\n  allArticles {\n    slug\n  }\n  _allArticlesMeta {\n    count\n  }\n}"): typeof import('./graphql').ArticleCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleGetBySlug($slug: String) {\n  article(filter: {slug: {eq: $slug}}) {\n    ...ArticleItem\n  }\n}"): typeof import('./graphql').ArticleGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleGetFirst($quantity: IntType) {\n  allArticles(first: $quantity, orderBy: createdat_DESC) {\n    ...ArticleItem\n  }\n}"): typeof import('./graphql').ArticleGetFirstDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleGetList {\n  allArticles {\n    ...ArticleItem\n  }\n}"): typeof import('./graphql').ArticleGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleGetListWithPagination($first: IntType, $skip: IntType) {\n  allArticles(orderBy: createdat_DESC, first: $first, skip: $skip) {\n    ...ArticleItem\n  }\n}"): typeof import('./graphql').ArticleGetListWithPaginationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ArticleGetSlugList {\n  allArticles {\n    slug\n  }\n}"): typeof import('./graphql').ArticleGetSlugListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticleItem on ArticleRecord {\n  slug\n  title\n  text(markdown: true)\n  createdat\n  link\n}"): typeof import('./graphql').ArticleItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
