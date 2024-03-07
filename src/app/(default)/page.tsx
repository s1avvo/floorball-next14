import Image from "next/image";
import { HomeHero } from "@ui/HomeHero";
import { HomeNews } from "@ui/HomeNews";
import { HomeTrainer } from "@ui/HomeTrainer";
import { Sponsor } from "@ui/Sponsor";

import Background from "@assets/background.webp";

export default function Home() {
	return (
		<>
			{/* <script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
			/> */}

			<div className="relative rounded-xl bg-primary p-4 sm:p-8">
				<div className="absolute right-0 top-0 z-0 h-[1000px] w-full opacity-25 sm:opacity-100">
					<Image
						src={Background}
						alt="Floorball Śrem"
						fill
						sizes="100%"
						placeholder="blur"
						quality={90}
						priority
						style={{
							height: "100%",
							aspectRatio: "1/1",
							objectFit: "contain",
							overflow: "hidden",
							objectPosition: "top right",
						}}
					/>
				</div>

				<HomeHero />
				<HomeNews />
			</div>
			<HomeTrainer />
			<Sponsor />
		</>
	);
}
