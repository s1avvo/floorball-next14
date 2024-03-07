import Image from "next/image";
import Link from "next/link";
import { type Route } from "next";
import { Facebook } from "@ui/Facebook";
import { type TrainerItemFragment } from "@/gql/graphql";

export const TrainerProfile = ({ trainer }: { trainer: TrainerItemFragment }) => {
	return (
		<div className="mx-auto flex items-center justify-center">
			<div className="relative">
				<div className="mb-2 w-full overflow-hidden rounded-br-xl rounded-tl-xl rounded-tr-[100px]">
					<div className="absolute right-0 top-0">
						<Link
							href={trainer.facebook as Route}
							className="text-blue-950 dark:text-white"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook - Floorball Śrem"
						>
							<Facebook fillColor={"#FF8906"} />
						</Link>
					</div>
					<Image
						src={trainer.profileImage.url}
						alt={trainer.profileImage.alt}
						height={293}
						width={335}
						quality={90}
						style={{
							height: "100%",
							aspectRatio: "auto",
							objectFit: "cover",
							overflow: "hidden",
							objectPosition: "center",
						}}
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader" />
				</div>

				<h6 className="text-xl text-black">{trainer.name}</h6>
				<ul className="text-sm text-accent">
					{trainer.skill.map((item) => (
						<li key={item.id}>{item.name}#</li>
					))}
				</ul>
			</div>
		</div>
	);
};
