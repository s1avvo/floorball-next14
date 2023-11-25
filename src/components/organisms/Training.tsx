import { Suspense } from "react";
import { trening } from "@/constants/trening";
import { TreningCard } from "@/components/atoms/TreningCard";
import { Ball } from "@/components/atoms/Ball";
import { TreningGallerySwiper } from "@/components/atoms/TreningGallerySwiper";
import { Loading } from "@/components/atoms/Loading";

export const Training = () => {
	return (
		<section
			className="relative mt-8 flex h-full min-h-screen w-full flex-col justify-center gap-4 px-2 md:mt-0 xl:px-48"
			id="trening"
		>
			<div className="justify-between gap-4 sm:flex xl:gap-6">
				<TreningCard
					imageHeight="h-48"
					className="basis-1/2 space-y-4 md:basis-1/3"
					trening={trening[0]}
				/>
				<TreningCard
					imageHeight="h-48"
					className="basis-1/2 space-y-4 md:basis-1/3"
					trening={trening[1]}
				/>

				<div className="mb-6 hidden w-full basis-1/3 items-end justify-between px-2 md:flex">
					<div>
						<h2 className="text-7xl font-extrabold">Hala</h2> <h3 className="text-5xl">Sportowa</h3>
						<p className="mt-4 text-lg">Śremie, ul. Staszica 1a</p>
					</div>
					<Ball fill={"#ffcc00"} width={35} height={35} />
				</div>
			</div>
			<div className="w-ful mb-6 flex flex-col justify-between px-2 md:hidden">
				<div className="flex items-end justify-between">
					<h2 className="inline-block text-6xl">
						<span className="font-extrabold">Hala</span> Sportowa
					</h2>
					<Ball fill={"#ffcc00"} width={35} height={35} />
				</div>
				<p className="text-lg">Śremie, ul. Staszica 1a</p>
			</div>
			<div className="h-56">
				<Suspense fallback={<Loading />}>
					<TreningGallerySwiper />
				</Suspense>
			</div>
		</section>
	);
};
