import { ThemeImage } from "@/components/atoms/ThemeImage";

export const AboutUsPartners = () => {
	return (
		<div className="absolute -bottom-20 -left-2 flex h-20 items-center gap-x-2 sm:left-4 md:left-10 md:gap-x-10">
			<ThemeImage
				srcLight={"/assets/partnerzy-01_light.png"}
				srcDark={"/assets/partnerzy-01_dark.png"}
				alt="Wielkopolskie Centrum Fizjoterapii"
				width={160}
				height={60}
				priority
			/>
			<ThemeImage
				srcLight={"/assets/partnerzy-02_light.png"}
				srcDark={"/assets/partnerzy-02_dark.png"}
				alt="Bet-exim"
				width={120}
				height={50}
				priority
			/>
			<ThemeImage
				srcLight={"/assets/partnerzy-03_light.png"}
				srcDark={"/assets/partnerzy-03_dark.png"}
				alt="Śremski Sport"
				width={50}
				height={50}
				priority
			/>
		</div>
	);
};
