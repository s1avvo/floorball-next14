import Link from "next/link";
import { CustomButton } from "@ui/CustomButton";
import { Ball } from "@ui/Ball";
import { TrainerSwiper } from "@ui/TrainerSwiper";

import { getTrainersList } from "@api/getTrainer";

export const HomeTrainer = async () => {
	const trainers = await getTrainersList();

	return (
		<section className="relative flex-row-reverse sm:flex">
			<div className="md:w-1/2 lg:w-1/3">
				<div className="mb-4 flex h-full flex-col justify-between rounded-lg bg-secondary p-8">
					<article>
						<h2 className="mb-12 text-4xl text-heading">Nasi trenerzy</h2>
						<p className="prose mb-4 text-base text-heading">
							Mamy grupę doświadczonych trenerów, którzy nie tylko posiadają wiedzę techniczną i taktyczną, ale także
							pasję do rozwoju młodych talentów. Dzięki ich zaangażowaniu i profesjonalizmowi, nasi zawodnicy rozwijają
							swoje umiejętności unihokejowe oraz uczą się wartości teamworku, determinacji i zasad fair play.
						</p>
						<p className="prose mb-4 text-base text-heading">
							Chcesz dowiedzieć się więcej o naszych metodach treningowych? Zawsze możesz porozmawiać z trenerami, aby
							uzyskać więcej informacji!
						</p>
						<div className="mb-4 flex gap-2">
							<Link href={"/treningi"}>
								<CustomButton size="small">#Treningi</CustomButton>
							</Link>
							<Link href={"/kontakt"}>
								<CustomButton size="small">#Kontakt</CustomButton>
							</Link>
						</div>
					</article>

					<span className="self-end">
						<Ball fill="#FF8906" height={75} width={75} />
					</span>
				</div>
			</div>

			<div className="w-screen px-2 md:w-1/2 md:px-4 lg:w-2/3 xl:px-8">
				<TrainerSwiper trainers={trainers} />
			</div>
		</section>
	);
};
