import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ArticleGetBySlugDocument } from "@/gql/graphql";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const secret = searchParams.get("secret");
	const slug = searchParams.get("slug");

	if (secret !== process.env.NEXT_DATOCMS_DRAFT_TOKEN || !slug) {
		return new Response("Invalid token", { status: 401 });
	}

	const { article } = await executeGraphql({
		query: ArticleGetBySlugDocument,
		variables: { slug },
		cache: "no-cache",
		headers: {
			"X-Include-Drafts": "true",
		},
	});

	if (!article) {
		return new Response("Invalid slug", { status: 401 });
	}

	draftMode().enable();

	redirect(`/article/${article.slug}`);
}
