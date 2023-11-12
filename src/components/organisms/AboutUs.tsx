import NextImage from "next/image";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { AboutUsBackground } from "@/components/atoms/AboutUsBackground";

export const AboutUs = () => {
	return (
		<section
			className="relative -z-50 flex h-full min-h-screen w-full flex-col bg-[#000728]"
			id="about-us"
		>
			{/* background image */}
			<AboutUsBackground />

			{/* text */}
			<article>
				<div className="justify-between gap-4 px-2 sm:flex sm:px-20 md:px-48">
					<div className="h-screen w-full basis-2/3 pt-32 text-end sm:pt-16">
						<div className="me-2 basis-full text-3xl font-light text-neutral-100 sm:text-4xl md:me-2 xl:me-4 xl:text-8xl">
							FLOORBALL
						</div>
						<div className="basis-full text-[7rem]/[120px] font-extrabold text-amber-400 sm:text-9xl xl:text-12xl">
							ŚREM
						</div>
						<div className="flex max-w-[500px] flex-col xl:space-y-6">
							<div className="mt-8 hidden border-y-2 border-neutral-100 px-6 py-4 text-start italic xl:flex">
								<p>
									<q className="prose-sm font-light text-neutral-100">
										Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od
										tego, czy w danej chwili wygrywamy czy przegrywamy dawać z siebie wszystko.
									</q>
								</p>
							</div>
							<SubmitButton label="DOŁĄCZ DO NAS" />
						</div>
					</div>
				</div>
			</article>

			{/*Partners*/}
			<div className="absolute bottom-1 left-0 flex h-20 transform items-center gap-x-2  sm:left-1/2 sm:-translate-x-1/2 sm:gap-x-10">
				<NextImage
					src={"/assets/partnerzy-01_dark.png"}
					alt="Wielkopolskie Centrum Fizjoterapii"
					width={160}
					height={60}
					priority
				/>
				<NextImage
					src={"/assets/partnerzy-02_dark.png"}
					alt="Bet-exim"
					width={120}
					height={50}
					priority
				/>
				<NextImage
					src={"/assets/partnerzy-03_dark.png"}
					alt="Śremski Sport"
					width={50}
					height={50}
					priority
				/>
			</div>
		</section>
	);
};
