import Link from "next/link";
import { AboutUsBackground } from "@/components/atoms/AboutUsBackground";
import { AboutUsPartners } from "@/components/atoms/AboutUsPartners";
import { Button } from "@/components/atoms/Button";

export const AboutUs = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col" id="about-us">
			{/* background image */}
			<AboutUsBackground />

			{/* text */}
			<article>
				<div className="justify-between gap-4 px-4 sm:flex xl:px-48">
					<div className="h-screen w-full basis-1/2 pt-24 md:basis-2/3">
						<div className="ms-36 basis-full text-3xl sm:text-4xl md:ms-48 md:text-5xl xl:ms-44 xl:text-8xl">
							FLOORBALL
						</div>
						<div className="basis-full text-[7rem]/[120px] font-extrabold text-amber-400 sm:text-9xl md:text-10xl xl:text-12xl">
							ŚREM
						</div>
						<div className="relative flex max-w-[500px] flex-col xl:space-y-6">
							<div className="mt-4 hidden border-y-2 border-blue-900 px-6 py-4 text-start italic dark:border-white xl:flex">
								<p>
									<q className="prose-sm">
										Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od
										tego, czy w danej chwili wygrywamy czy przegrywamy dawać z siebie wszystko.
									</q>
								</p>
							</div>
							<Link href={"#contact_form"}>
								<Button label="DOŁĄCZ DO NAS" />
							</Link>
							<AboutUsPartners />
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};
