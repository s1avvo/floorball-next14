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
					borderRadius: "100px 00px",
					color: "white",
				}}
			>
				<img
					height="100%"
					src={"https://floorball-next14-git-develop-s1avo.vercel.app/assets/bg_dark.png"}
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
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<img
							width="125"
							height="120"
							src={"https://floorball-next14-git-develop-s1avo.vercel.app/assets/logo_og.png"}
							alt="logo"
						/>
						<span
							style={{
								marginLeft: 8,
								fontSize: 32,
							}}
						>
							Unihokej | Floorball Śrem
						</span>
					</div>

					<span
						style={{
							marginRight: 100,
							fontSize: 32,
							backgroundColor: "#fbbf24",
							color: "white",
							padding: "20px 50px",
							borderRadius: "20px",
						}}
					>
						Dołącz do nas!
					</span>
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "50px 100px",
						margin: "0 42px",
						fontSize: 65,
						width: "70%",
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
				<p
					style={{
						bottom: 42,
						position: "absolute",
						display: "flex",
						alignItems: "center",
						fontSize: 32,
					}}
				>
					Śremski Klub Unihokeja - Floorball Śrem
				</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
