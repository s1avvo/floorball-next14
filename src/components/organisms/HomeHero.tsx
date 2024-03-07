import Link from "next/link";
import { CustomButton } from "@ui/CustomButton";

export const HomeHero = () => {
	return (
		<section className="relative z-10 mb-24 max-w-lg">
			<h1 className="mb-8 text-4xl text-heading drop-shadow-lg sm:text-5xl">
				Śremski
				<br />
				Klub
				<br />
				Unihokeja
			</h1>
			<hr className="mb-8 h-1 bg-accent" />
			<p className="prose mb-8 text-base text-paragraph">
				Witaj na oficjalnej stronie Floorball Śrem. Nasza misja to promowanie unihokeja jako aktywności fizycznej dla
				wszystkich grup wiekowych oraz poziomów umiejętności.
			</p>
			<Link href={"/kontakt"}>
				<CustomButton size="regular">Dołącz do nas</CustomButton>
			</Link>
		</section>
	);
};
