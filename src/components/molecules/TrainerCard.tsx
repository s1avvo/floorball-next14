import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { type Route } from "next";
import { type TrainerItemFragment } from "@/gql/graphql";
import { Facebook } from "@ui/Facebook";

export const TrainerCard = ({ trainer }: { trainer: TrainerItemFragment }) => {
	return (
		<div className="mx-auto flex items-center justify-center">
			<div className="relative">
				<div className="mb-2 w-full overflow-hidden rounded-br-xl rounded-tl-xl rounded-tr-[100px]">
					<div className="absolute right-0 top-0 z-10">
						<Link
							href={trainer.facebook as Route}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook - Floorball Śrem"
						>
							<Facebook />
						</Link>
					</div>
					<div className="relative h-[293px] w-[335px] overflow-hidden">
						<DatoImage
							data={trainer.profileImage.responsiveImage!}
							layout="fill"
							objectFit="cover"
							objectPosition={"50% 50%"}
							style={{
								height: "100%",
							}}
						/>
					</div>
				</div>

				<h5 className="text-xl text-cardparagraph">{trainer.name}</h5>
				<ul className="text-sm text-accent">
					{trainer.skill.map((item) => (
						<li key={item.id}>#{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
