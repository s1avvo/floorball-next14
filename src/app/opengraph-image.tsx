import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Floorball Śrem";

export default async function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					letterSpacing: "-.02em",
					fontWeight: 700,
					background: "#000728",
					color: "white",
				}}
			>
				<img
					height="100%"
					src={"https://floorball-next14.vercel.app/assets/bg_dark.png"}
					alt="bg"
					style={{ position: "absolute", zIndex: -10, right: 0 }}
				/>
				<div
					style={{
						left: 42,
						top: 42,
						position: "absolute",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: 20 }}>
						<img
							width="175"
							height="170"
							src={"https://floorball-next14.vercel.app/assets/logo_og.png"}
							alt="logo"
						/>
						<p
							style={{
								marginLeft: 8,
								fontSize: 32,
							}}
						>
							Śremski Klub Unihokeja
						</p>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "40px 100px",
						margin: "0 42px",
						fontSize: 65,
						width: "65%",
						textAlign: "center",
						backgroundColor: "rgba(0,7,40,0.7)",
						color: "white",
						lineHeight: 1.4,
						fontWeight: 900,
						borderTop: "2px solid",
						borderBottom: "2px solid",
					}}
				>
					www.floorballsrem.com
				</div>
				<span
					style={{
						position: "absolute",
						bottom: 42,
						fontSize: 32,
						backgroundColor: "#fbbf24",
						color: "white",
						padding: "10px 40px",
						borderRadius: "50px",
					}}
				>
					Dołącz do nas!
				</span>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
