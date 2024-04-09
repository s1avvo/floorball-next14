import { AboutUsSection } from "@ui/AboutUsSection";
import { getPageImagesList } from "@/api/getPageImage";

export const AboutUs = async () => {
	const aboutUsImages = await getPageImagesList("O nas");

	return (
		<>
			<div className=" gap-4 lg:flex">
				<AboutUsSection
					title={
						<h1 className="mb-12 text-4xl text-secondary drop-shadow-md sm:text-5xl" data-aos="fade-up">
							Historia unihokeja <br />w Śremie
						</h1>
					}
					paragraphs={[
						"Klub powstał w 2020 roku z inicjatywy pasjonatów unihokeja, których drogi po blisko dwóch dekadach znowu się skrzyżowały. Ta grupa entuzjastów postanowiła wznowić treningi, niosąc ze sobą ducha sportowej pasji i determinacji. Do roku 1999 sekcje unihokeja w Śremie prowadził zasłużony trener Eugeniusz Kaczmarek, którego wpływ na sportowy rozwój unihokej w regionu był niezaprzeczalny. To właśnie pod jego skrzydłami kształtowali się obecni założyciele klubu.",
					]}
					image={aboutUsImages[0].headerImage.responsiveImage!}
				/>
			</div>
			<div className="flex-row-reverse gap-4 lg:flex">
				<AboutUsSection
					title={
						<h2 className="mb-12 text-3xl text-secondary drop-shadow-md sm:text-4xl" data-aos="fade-up">
							Narodziny idei unihokeja dla najmłodszych
						</h2>
					}
					paragraphs={[
						"Dwa lata po reaktywacji klubu, narodziła się idea nauczania unihokeja wśród najmłodszych zawodników. Z determinacją i zaangażowaniem, inspirowani dorobkiem trenera Kaczmarka, członkowie klubu postanowili kontynuować jego pracę.",
						"To właśnie ta idea stanowiła fundament powstania nowej historii unihokeja w Śremie i początek Floorball Śrem. W tym momencie mam trzy grupy młodych zawodników: przedszkolaki, klasy 1-2 i klasy 3-5.",
					]}
					image={aboutUsImages[0].headerImageAlternative?.responsiveImage}
				/>
			</div>
		</>
	);
};
