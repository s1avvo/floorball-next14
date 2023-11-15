import { ThemeImage } from "@/components/atoms/ThemeImage";

export const AboutUsBackground = () => {
	return (
		<ThemeImage
			placeholder="blur"
			blurDataURL="/assets/bg_dark.png"
			srcLight="/assets/bg_light.png"
			srcDark="/assets/bg_dark.png"
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
				zIndex: -99,
			}}
		/>
	);
};
