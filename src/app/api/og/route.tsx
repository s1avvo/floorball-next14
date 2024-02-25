import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { getNewsBySlug } from "@/app/api/getNews";

export async function GET(request: NextRequest) {
	const slug = request.nextUrl.searchParams.get("slug");

	console.log(slug);

	if (!slug) {
		return new ImageResponse(<>Floorball Śrem</>, {
			width: 1200,
			height: 630,
		});
	}

	const article = await getNewsBySlug(slug);

	console.log(article);

	if (!article) {
		return new ImageResponse(<>Floorball Śrem</>, {
			width: 1200,
			height: 630,
		});
	}

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/assets/og-news.png)`,
				}}
			>
				<div
					style={{
						marginLeft: 160,
						marginRight: 160,
						display: "flex",
						fontSize: 64,
						textAlign: "center",
						letterSpacing: "-0.05em",
						color: "white",
						lineHeight: "88px",
						whiteSpace: "pre-wrap",
					}}
				>
					{article?.title}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
