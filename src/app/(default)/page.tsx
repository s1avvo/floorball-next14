import { Image as DatoImage } from "react-datocms";
import { HomeHero } from "@ui/HomeHero";
import { HomeNews } from "@ui/HomeNews";
import { HomeTrainer } from "@ui/HomeTrainer";
import { SponsorList } from "@ui/SponsorList";

import { homeJsonLd } from "@/constants/jsonLd";
import { getPageImagesList } from "@/api/getPageImage";

export default async function Home() {
	const homeImages = await getPageImagesList("Home");

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
			/>

			<div className="relative mb-4 overflow-hidden rounded-none bg-primary sm:mb-12 sm:rounded-xl">
				<div className="absolute top-0 z-0 aspect-square max-h-[40rem] w-full rounded-none sm:rounded-xl">
					<DatoImage
						data={homeImages[0].headerImage.responsiveImage!}
						layout="responsive"
						objectFit="cover"
						objectPosition="top center"
						priority
						style={{
							height: "100%",
						}}
					/>
				</div>

				<HomeHero />
				<HomeNews />
			</div>
			<HomeTrainer />
			<SponsorList />
		</>
	);
}
