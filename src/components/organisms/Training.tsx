import { TreningCard } from "@/components/atoms/TreningCard";
import { trening } from "@/constants/trening";
import { Ball } from "@/components/atoms/Ball";
import { TreningGallerySwiper } from "@/components/atoms/TreningGallerySwiper";

export const Training = () => {
	return (
		<section
			className="relative flex h-full min-h-screen w-full flex-col justify-center gap-4 bg-[#000728] px-4 pt-8 sm:px-10 xl:px-48"
			id="trening"
		>
			<div className="justify-between gap-4 sm:flex xl:gap-6">
				<TreningCard imageHeight="h-48" className="basis-1/3 space-y-4" trening={trening[0]} />
				<TreningCard imageHeight="h-48" className="basis-1/3 space-y-4" trening={trening[1]} />

				<div className="mb-6 basis-1/3 self-end">
					<div>
						<div className="flex items-end gap-2">
							<h2 className="text-7xl font-extrabold text-neutral-100">Hala</h2>{" "}
							<Ball fill={"#ffcc00"} width={35} height={35} />
						</div>
						<h3 className="text-5xl text-neutral-100">Sportowa</h3>
						<p className="mt-4 text-lg text-neutral-100">Śremie, ul. Staszica 1a</p>
					</div>
				</div>
			</div>
			<div className="h-56">
				<TreningGallerySwiper />
			</div>
		</section>
	);
};
