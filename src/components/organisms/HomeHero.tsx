import Link from "next/link";
import { PartyPopperIcon, ChevronDownIcon } from "lucide-react";
import { CustomButton } from "@ui/CustomButton";
import { Ball } from "@ui/Icons";

export const HomeHero = () => {
	return (
		<section className="relative">
			<div className="flex h-[calc(100svh-100px)] min-h-[32rem] flex-col justify-end overflow-hidden p-8 sm:justify-center lg:max-h-[40rem] lg:p-12">
				<h1
					className="mb-4 max-w-[620px] text-3xl text-heading drop-shadow-lg xs:text-4xl sm:mb-8 lg:text-5xl"
					data-aos-id-hero
					data-aos="fade-up"
				>
					Śremski klub unihokeja
					<span className="ms-2 hidden sm:inline-flex" data-aos="fade" data-aos-delay="800">
						<Ball fill="#FF8906" height={35} width={35} />
					</span>
				</h1>
				<hr className="mb-4 h-1 max-w-20 bg-accent text-accent" data-aos="fade-up" data-aos-delay="200" />
				<p
					className="prose mb-8 max-w-sm text-base text-paragraph lg:max-w-lg lg:text-lg"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					Witaj na oficjalnej stronie klubu. Nasza misja to promowanie unihokeja jako aktywności fizycznej dla
					wszystkich grup wiekowych oraz poziomów umiejętności.
				</p>
				<div className="relative mx-auto mb-4 w-fit sm:mx-0">
					<Link href={"/kontakt"}>
						<CustomButton size="regular" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-hero]">
							Dołącz do nas
						</CustomButton>
						<PartyPopperIcon
							className="absolute bottom-4 right-2 text-heading"
							size={45}
							strokeWidth={1}
							data-aos="fade-zoom-in"
							data-aos-delay="1200"
							data-aos-offset="0"
							data-aos-anchor="[data-aos-id-hero]"
						/>
					</Link>
				</div>
				<span className="h-[25px] w-full" />
			</div>
			<div data-aos="fade-down" data-aos-delay="800" data-aos-anchor="[data-aos-id-hero]">
				<Link href={"#recent-news"} aria-label="Przjdz do sekcji ostatnie aktualności">
					<ChevronDownIcon
						size={65}
						className="absolute bottom-0 m-auto w-full text-heading transition delay-150 duration-500 ease-in-out hover:-translate-y-4"
					/>
				</Link>
			</div>
		</section>
	);
};
