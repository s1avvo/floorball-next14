import { Image as DatoImage } from "react-datocms";
import { MessageSquareQuote } from "lucide-react";
import { LucideIconWithText } from "@ui/LucideIconWithText";

import { getPageImagesList } from "@api/getPageImage";

export default async function AboutUsMain() {
	const aboutUsImages = await getPageImagesList("O nas");

	return (
		<div className="space-y-12 p-4 sm:p-8">
			<section className="space-y-16">
				<div className="gap-10 sm:flex">
					<article className="sm:w-1/2">
						<h1 className="mb-8 text-4xl text-secondary drop-shadow-md sm:text-5xl">
							Historia unihokeja <br />w Śremie
						</h1>
						<p className="text-cardparagraph prose text-base">
							Klub powstał w 2020 roku z inicjatywy pasjonatów unihokeja, których drogi po blisko dwóch dekadach znowu
							się skrzyżowały. Ta grupa entuzjastów postanowiła wznowić treningi, niosąc ze sobą ducha sportowej pasji i
							determinacji. Do roku 1999 sekcje unihokeja w Śremie prowadził zasłużony trener Eugeniusz Kaczmarek,
							którego wpływ na sportowy rozwój unihokej w regionu był niezaprzeczalny. To właśnie pod jego skrzydłami
							kształtowali się obecni założyciele klubu.
						</p>
					</article>

					<div className="mt-8 h-64 w-full self-end overflow-hidden rounded-xl shadow-lg sm:h-96 sm:w-1/2">
						<DatoImage
							data={aboutUsImages[0].headerImage.responsiveImage!}
							layout="responsive"
							objectFit="cover"
							priority
							style={{
								height: "100%",
							}}
						/>
					</div>
				</div>

				<div className="mb-24 flex-row-reverse gap-10 sm:flex">
					<article className="sm:w-1/2">
						<h2 className="mb-8 text-3xl text-secondary drop-shadow-md sm:text-4xl">
							Narodziny idei unihokeja dla najmłodszych
						</h2>
						<p className="text-cardparagraph prose mb-8 text-base">
							Dwa lata po reaktywacji klubu, narodziła się idea nauczania unihokeja wśród najmłodszych zawodników. Z
							determinacją i zaangażowaniem, inspirowani dorobkiem trenera Kaczmarka, członkowie klubu postanowili
							kontynuować jego pracę.
						</p>
						<p className="text-cardparagraph prose text-base">
							To właśnie ta idea stanowiła fundament powstania nowej historii unihokeja w Śremie i początek Floorball
							Śrem. W tym momencie mam trzy grupy młodych zawodników: przedszkolaki, klasy 1-2 i klasy 3-5.
						</p>
					</article>

					{aboutUsImages[0].headerImageAlternative && (
						<div className="mt-8 h-64 w-full self-end overflow-hidden rounded-xl shadow-lg sm:h-96 sm:w-1/2">
							<DatoImage
								data={aboutUsImages[0].headerImageAlternative.responsiveImage!}
								layout="responsive"
								objectFit="cover"
								priority
								style={{
									height: "100%",
								}}
							/>
						</div>
					)}
				</div>
			</section>

			<aside className="text-center">
				<LucideIconWithText Icon={MessageSquareQuote} size={72}>
					<div className="max-w-xl text-sm italic text-accent sm:text-lg">
						Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od tego, czy w danej chwili
						wygrywamy czy przegrywamy dawać z siebie wszystko.
					</div>
				</LucideIconWithText>
			</aside>
		</div>
	);
}
