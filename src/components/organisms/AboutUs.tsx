import { SubmitButton } from "@/components/atoms/SubmitButton";
import { AboutUsBackground } from "@/components/atoms/AboutUsBackground";

export const AboutUs = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col" id="about-us">
			{/* text */}
			<article>
				<div className="flex flex-col px-4 pt-28 sm:ps-20 md:ps-48">
					<div className="ps-36 text-3xl font-semibold text-blue-900 sm:ps-20 sm:text-5xl md:ps-56 md:text-8xl">
						FLOORBALL
					</div>
					<div className="md:text-12xl text-[7rem]/[120px] font-extrabold text-cyan-500 sm:text-9xl">
						ŚREM
					</div>
					<div className="flex max-w-[250px] flex-col gap-8 sm:max-w-[300px] md:max-w-md">
						<div className="mt-8 hidden border-y-2 border-blue-900 px-6 py-4 italic md:flex">
							<p>
								<q className="text-sm">
									Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od tego,
									czy w danej chwili wygrywamy czy przegrywamy dawać z siebie wszystko
								</q>
							</p>
						</div>
						<SubmitButton label="DOŁĄCZ DO NAS" />
					</div>
				</div>
			</article>

			{/* background image */}
			<AboutUsBackground />
		</section>
	);
};
