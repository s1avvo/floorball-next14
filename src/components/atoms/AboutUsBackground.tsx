import NextImage from "next/image";

export const AboutUsBackground = () => {
	return (
		<NextImage
			placeholder="blur"
			blurDataURL="/assets/bg_dark.png"
			src="/assets/bg_dark.png"
			alt="Floorball Śrem Image"
			fill
			priority
			style={{
				width: "100%",
				maxHeight: "100vh",
				height: "100%",
				objectFit: "contain",
				overflow: "hidden",
				objectPosition: "right bottom",
				zIndex: -1,
			}}
		/>
	);
};
