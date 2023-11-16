import { Suspense } from "react";
import { TreningCard } from "@/components/atoms/TreningCard";
import { trening } from "@/constants/trening";
import { Ball } from "@/components/atoms/Ball";
import { TreningGallerySwiper } from "@/components/atoms/TreningGallerySwiper";
import { Loading } from "@/components/atoms/Loading";

export const Training = () => {
	return (
		<section
			className="relative flex h-full min-h-screen w-full flex-col justify-center gap-4 px-2 sm:px-10 xl:px-48"
			id="trening"
		>
			<div className="justify-between gap-4 sm:flex xl:gap-6">
				<TreningCard imageHeight="h-48" className="basis-1/3 space-y-4" trening={trening[0]} />
				<TreningCard imageHeight="h-48" className="basis-1/3 space-y-4" trening={trening[1]} />

				<div className="mb-6 flex w-full basis-1/3 items-end justify-between px-2">
					<div>
						<h2 className="text-7xl font-extrabold">Hala</h2> <h3 className="text-5xl">Sportowa</h3>
						<p className="mt-4 text-lg">Śremie, ul. Staszica 1a</p>
					</div>
					<Ball fill={"#ffcc00"} width={35} height={35} />
				</div>
			</div>
			<div className="h-56">
				<Suspense fallback={<Loading />}>
					<TreningGallerySwiper />
				</Suspense>
			</div>
		</section>
	);
};
