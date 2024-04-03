import Link from "next/link";
import { PartyPopperIcon, ChevronDownIcon } from "lucide-react";
import { CustomButton } from "@ui/CustomButton";
import { Ball } from "@ui/Ball";

export const HomeHero = () => {
	return (
		<section className="relative">
			<div className="min-height-v flex min-h-[calc(100svh-125px)] max-w-[620px] flex-col justify-center p-8 sm:p-12">
				<h1
					className="mb-4 text-4xl text-heading drop-shadow-lg sm:mb-8 sm:text-5xl"
					data-aos-id-hero
					data-aos="fade-up"
				>
					Śremski klub unihokeja
					<span className="ms-2 hidden sm:inline-flex" data-aos="fade" data-aos-delay="800">
						<Ball fill="#FF8906" height={35} width={35} />
					</span>
				</h1>
				<hr className="mb-4 h-1 max-w-20 bg-accent text-accent" data-aos="fade-up" data-aos-delay="200" />
				<h6
					className="prose mb-8 max-w-sm text-base text-paragraph sm:text-lg lg:max-w-full"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					Witaj na oficjalnej stronie klubu Floorball Śrem. Nasza misja to promowanie unihokeja jako aktywności
					fizycznej dla wszystkich grup wiekowych oraz poziomów umiejętności.
				</h6>
				<div className="relative w-fit">
					<Link href={"/kontakt"}>
						<CustomButton size="regular" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-hero]">
							Dołącz do nas
						</CustomButton>
						<PartyPopperIcon
							className="absolute bottom-4 right-2 text-heading dark:text-paragraph"
							size={45}
							strokeWidth={1}
							data-aos="fade-zoom-in"
							data-aos-delay="1200"
							data-aos-offset="0"
							data-aos-anchor="[data-aos-id-hero]"
						/>
					</Link>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-delay="800" data-aos-anchor="[data-aos-id-hero]">
				<Link href={"#recent-news"}>
					<ChevronDownIcon
						className="absolute -bottom-5 m-auto w-full text-heading transition delay-150 duration-500 ease-in-out hover:-translate-y-4"
						size={75}
					/>
				</Link>
			</div>
		</section>
	);
};
