import Link from "next/link";
import { CustomButton } from "@ui/CustomButton";
import { Ball } from "@ui/Icons";
import { TrainerSwiper } from "@ui/TrainerSwiper";

import { getTrainersList } from "@/api/getTrainer";

export const HomeTrainer = async () => {
	const trainers = await getTrainersList();

	return (
		<section className="relative mb-8 flex-row-reverse sm:flex">
			<div className="md:w-1/2 lg:w-1/3">
				<div className="mb-4 flex h-full flex-col justify-between overflow-hidden rounded-lg bg-secondary p-8">
					<article>
						<h2 className="mb-8 text-3xl text-heading drop-shadow-lg xs:text-4xl dark:text-primary" data-aos="fade-up">
							Nasi trenerzy
						</h2>
						<hr className="mb-4 h-1 max-w-20 bg-accent text-accent" data-aos="fade-up" data-aos-delay="200" />
						<p className="prose mb-4 text-base text-heading dark:text-primary" data-aos="fade-up" data-aos-delay="400">
							Mamy grupę doświadczonych trenerów, którzy nie tylko posiadają wiedzę techniczną i taktyczną, ale także
							pasję do rozwoju młodych talentów. Dzięki ich zaangażowaniu i profesjonalizmowi, nasi zawodnicy rozwijają
							swoje umiejętności unihokejowe oraz uczą się wartości teamworku, determinacji i zasad fair play.
						</p>
						<p className="prose mb-4 text-base text-heading dark:text-primary" data-aos="fade-up" data-aos-delay="600">
							Chcesz dowiedzieć się więcej o naszych metodach treningowych? Zawsze możesz porozmawiać z trenerami, aby
							uzyskać więcej informacji!
						</p>
						<div className="mb-4 flex gap-2">
							<Link href={"/treningi"}>
								<CustomButton size="small" data-aos="fade-zoom-in" data-aos-delay="1200" data-aos-offset="0">
									#Treningi
								</CustomButton>
							</Link>
							<Link href={"/kontakt"}>
								<CustomButton size="small" data-aos="fade-zoom-in" data-aos-delay="1400" data-aos-offset="0">
									#Kontakt
								</CustomButton>
							</Link>
						</div>
					</article>

					<span className="self-end">
						<Ball fill="#FF8906" height={75} width={75} />
					</span>
				</div>
			</div>

			<div className="w-screen px-2 md:w-1/2 md:px-4 lg:w-2/3 xl:px-8" data-aos="fade">
				<TrainerSwiper trainers={trainers} />
			</div>
		</section>
	);
};
