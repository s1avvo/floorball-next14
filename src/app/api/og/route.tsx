import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: NextRequest) {
	const slug = request.nextUrl.searchParams.get("slug");

	if (!slug) {
		return new ImageResponse(<>Floorball Śrem</>, {
			width: 1200,
			height: 630,
		});
	}

	const res = await fetch("https://graphql.datocms.com/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: process.env.NEXT_DATOCMS_API_TOKEN as string,
		},
		body: JSON.stringify({
			query: `
				query GetBySlug($slug: String) {
					article(filter: { slug: { eq: $slug } }) {
					title
				  }
				}
			  `,
			variables: {
				slug: slug,
			},
		}),
	});

	const { data } = (await res.json()) as { data: { article: { id: string; title: string } } };
	const { title } = data.article;

	if (!title) {
		return new ImageResponse(<>Floorball Śrem</>, {
			width: 1200,
			height: 630,
		});
	}

	const fontData = await fetch(new URL(`${process.env.NEXT_PUBLIC_URL}/fonts/Roboto-Bold.ttf`, import.meta.url)).then(
		(res) => res.arrayBuffer(),
	);

	return new ImageResponse(
		(
			<div tw="relative w-[1200px] h-[630px] flex items-center justify-center">
				<img
					tw="absolute left-0 top-0"
					width={1200}
					height={630}
					src={process.env.OPEN_GRAPH_IMAGE_NEWS}
					alt="Floorball Opengraph Image Background"
				/>
				<div tw="w-full flex flex-wrap items-center justify-end">
					<p tw="w-1/2 text-[4rem] font-bold text-white pt-4 pb-4 pl-8 pr-16">{title}</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Roboto",
					data: fontData,
					style: "normal",
					weight: 700,
				},
			],
		},
	);
}
