import { ImageResponse } from "next/og";
import { getNewsById } from "@/app/api/getNews";

// export const runtime = "edge";
export const alt = "Unihokej | Floorball Śrem | News";
export const size = {
	width: 1200,
	height: 630,
};

export default async function OpengraphImage({ params }: { params: { id: string } }) {
	const article = await getNewsById(params.id);

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
					alignItems: "flex-start",
					justifyContent: "center",
					backgroundImage: `url(https://floorballsrem.com/assets/og-news.png)`,
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
