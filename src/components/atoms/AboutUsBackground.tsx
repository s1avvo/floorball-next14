import NextImage from "next/image";

export const AboutUsBackground = () => {
	return (
		<NextImage
			placeholder="blur"
			blurDataURL="/main_image.png"
			src="/main_image.png"
			alt="Floorball Śrem Image"
			fill
			priority
			style={{
				width: "100%",
				height: "100%",
				objectFit: "contain",
				overflow: "hidden",
				objectPosition: "right bottom",
				zIndex: -99,
			}}
		/>
	);
};
