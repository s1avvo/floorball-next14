import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";
import { LucideIconWithText } from "@ui/LucideIconWithText";

export default async function AboutUsMain() {
	return (
		<div className="space-y-8 p-4 sm:p-8">
			<section className="gap-10 sm:flex">
				<div className="sm:w-1/2">
					<h1 className="mb-8 text-4xl text-secondary drop-shadow-md sm:text-5xl">
						Historia unihokeja <br />w Śremie
					</h1>
					<p className="prose mb-8 text-base text-black">
						Klub powstał w 2020 roku z inicjatywy pasjonatów unihokeja, których drogi po blisko dwóch dekadach znowu się
						skrzyżowały. Ta grupa entuzjastów postanowiła wznowić treningi, niosąc ze sobą ducha sportowej pasji i
						determinacji. Do roku 1999 sekcje unihokeja w Śremie prowadził zasłużony trener Eugeniusz Kaczmarek, którego
						wpływ na sportowy rozwój unihokej w regionu był niezaprzeczalny. To właśnie pod jego skrzydłami kształtowali
						się obecni założyciele klubu.
					</p>
				</div>
				<div className="relative h-64 w-full rotate-1 self-end bg-heading shadow-lg sm:h-96 sm:w-1/2">
					<Image
						fill
						src={"/assets/unihokej-12.webp"}
						alt=""
						quality={90}
						priority
						style={{
							padding: "12px",
							height: "100%",
							aspectRatio: "1/1",
							objectFit: "cover",
							overflow: "hidden",
							objectPosition: "center",
							borderRadius: "14px",
						}}
					/>
				</div>
			</section>

			<section className="mb-24 flex-row-reverse gap-10 sm:flex">
				<div className="sm:w-1/2">
					<h2 className="mb-8 text-3xl text-secondary drop-shadow-md sm:text-4xl">
						Narodziny idei unihokeja dla najmłodszych
					</h2>
					<p className="prose mb-8 text-base text-black">
						Dwa lata po reaktywacji klubu, narodziła się idea nauczania unihokeja wśród najmłodszych zawodników. Z
						determinacją i zaangażowaniem, inspirowani dorobkiem trenera Kaczmarka, członkowie klubu postanowili
						kontynuować jego pracę.
					</p>
					<p className="prose mb-8 text-base text-black">
						To właśnie ta idea stanowiła fundament powstania nowej historii unihokeja w Śremie i początek Floorball
						Śrem. W tym momencie mam trzy grupy młodych zawodników: przedszkolaki, klasy 1-2 i klasy 3-5.
					</p>
				</div>
				<div className="relative h-64 w-full -rotate-1 self-end bg-heading shadow-lg sm:h-96  sm:w-1/2">
					<Image
						fill
						src={"/assets/unihokej-12.webp"}
						alt=""
						quality={90}
						priority
						style={{
							height: "100%",
							padding: "12px",
							aspectRatio: "1/1",
							objectFit: "cover",
							overflow: "hidden",
							objectPosition: "center",
							borderRadius: "14px",
						}}
					/>
				</div>
			</section>
			<div className="text-center">
				<LucideIconWithText Icon={MessageSquareQuote} size={72}>
					<div className="max-w-xl text-sm italic text-accent sm:text-lg">
						Cena sukcesu to ciężka praca, poświęcenie i determinacja, by niezależnie od tego, czy w danej chwili
						wygrywamy czy przegrywamy dawać z siebie wszystko.
					</div>
				</LucideIconWithText>
			</div>
		</div>
	);
}
