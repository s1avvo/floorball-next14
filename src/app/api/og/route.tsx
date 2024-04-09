import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { getNewsBySlug } from "@/api/getNews";

// export const runtime = "edge";

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

	// const fontData = await fetch(new URL(`${process.env.NEXT_PUBLIC_URL}/fonts/Roboto-Bold.ttf`, import.meta.url)).then(
	// 	(res) => res.arrayBuffer(),
	// );

	return new ImageResponse(
		(
			<div tw="relative w-[1200px] h-[630px] flex items-center justify-center">
				<img
					tw="absolute left-0 top-0"
					width={1200}
					height={630}
					src="https://www.datocms-assets.com/120233/1712594950-og_news.jpg"
					alt="Floorball Opengraph Image Background"
				/>
				<div tw="w-full flex flex-wrap items-center justify-end">
					<p tw="w-1/2 text-[4rem] font-bold text-white pt-4 pb-4 pl-8 pr-16">{article?.title}</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			// fonts: [
			// 	{
			// 		name: "Roboto",
			// 		data: fontData,
			// 		style: "normal",
			// 		weight: 700,
			// 	},
			// ],
		},
	);
}
