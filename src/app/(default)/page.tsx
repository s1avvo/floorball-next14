import { Image as DatoImage } from "react-datocms";
import { HomeHero } from "@ui/HomeHero";
import { HomeNews } from "@ui/HomeNews";
import { HomeTrainer } from "@ui/HomeTrainer";
import { Sponsor } from "@ui/Sponsor";

import { getPageImagesList } from "@api/getPageImage";

export default async function Home() {
	const homeImages = await getPageImagesList("Home");

	return (
		<>
			{/* <script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
			/> */}

			<div className="relative rounded-xl bg-primary p-4 sm:p-8">
				<div className="absolute right-0 top-0 z-0 h-[1100px] w-full overflow-hidden rounded-xl opacity-25 sm:opacity-100">
					<DatoImage
						data={homeImages[0].headerImage.responsiveImage!}
						layout="responsive"
						objectFit="contain"
						objectPosition="top right"
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
			<Sponsor />
		</>
	);
}
