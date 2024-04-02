import Link from "next/link";
import { PartyPopperIcon } from "lucide-react";
import { CustomButton } from "@ui/CustomButton";

export const HomeHero = () => {
	return (
		<section className="relative z-10 min-h-[calc(100svh-100px)] max-w-xl p-8 sm:p-12">
			<h1 className="mb-8 text-4xl text-heading drop-shadow-lg sm:text-6xl" data-aos-id-hero data-aos="fade-up">
				Śremski Klub Unihokeja
			</h1>
			<hr className="mb-4 h-1 bg-accent text-accent" data-aos="fade-up" data-aos-delay="200" />
			<h6 className="prose mb-4  text-lg text-paragraph" data-aos="fade-up" data-aos-delay="400">
				Witaj na oficjalnej stronie Floorball Śrem. Nasza misja to promowanie unihokeja jako aktywności fizycznej dla
				wszystkich grup wiekowych oraz poziomów umiejętności.
			</h6>

			<Link href={"/kontakt"} className="relative">
				<CustomButton size="regular" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-hero]">
					Dołącz do nas
				</CustomButton>
				<PartyPopperIcon
					className="absolute bottom-0 right-3 text-heading dark:text-paragraph"
					size={45}
					strokeWidth={1}
					data-aos="fade-zoom-in"
					data-aos-delay="1200"
					data-aos-offset="0"
					data-aos-anchor="[data-aos-id-hero]"
				/>
			</Link>
		</section>
	);
};
