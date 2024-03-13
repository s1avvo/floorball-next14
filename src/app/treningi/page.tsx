import Image from "next/image";
import { TreningCard } from "@/components/atoms/TreningCard";
import { TreningGallerySwiper } from "@/components/molecules/TreningGallerySwiper";
import { getTreningList } from "@/app/api/getTrening";

export default async function TreningMain() {
	const trening = await getTreningList();

	return (
		<div className="space-y-12 p-4 sm:p-8">
			<section className="gap-10 sm:flex">
				<div className="sm:w-1/2">
					<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl">
						Harmonogram treningów dla najmłodszych
					</h1>
					<p className="prose mb-8 text-base text-black">
						Zapraszamy do udziału w naszych treningach, które odbywają się regularnie w Hali Sportowej w Śremie, przy
						ul. Staszica 1a. Sprawdź poniższy harmonogram treningów dla różnych grup wiekowych:
					</p>
				</div>
				<div className="relative hidden h-64 w-full self-end sm:block sm:h-96 sm:w-1/2">
					<Image
						fill
						src={"https://www.datocms-assets.com/120233/1710275222-trening_header.webp"}
						alt="Floorball Śrem Trening"
						quality={90}
						priority
						sizes="(min-width: 1360px) 588px, (min-width: 1040px) calc(46.67vw - 37px), (min-width: 960px) 376px, (min-width: 780px) calc(36.25vw + 35px), calc(13.33vw + 163px)"
						style={{
							height: "100%",
							aspectRatio: "1/1",
							objectFit: "cover",
							overflow: "hidden",
							objectPosition: "center",
							borderRadius: "10px",
						}}
					/>
					<small className="absolute -bottom-5 right-0 text-sm">Photo by Astrid Schaffner on Unsplash</small>
				</div>
			</section>
			<section className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
				{trening.map((item) => (
					<TreningCard key={item.id} trening={item} />
				))}
			</section>
			<TreningGallerySwiper />
		</div>
	);
}
