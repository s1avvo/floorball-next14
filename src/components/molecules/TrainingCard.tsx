import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { type TrainingItemFragment } from "@/gql/graphql";

export const TrainingCard = ({ training, delay }: { training: TrainingItemFragment; delay?: string }) => {
	return (
		<div
			className="relative mt-4 flex w-[330px] flex-col rounded-lg bg-primary px-4 pb-6 pt-48 sm:px-6"
			data-aos="fade-up"
			data-aos-delay={delay}
		>
			<div
				className={clsx(
					"absolute -top-[10px] flex h-[175px] w-[200px] justify-center rounded-md bg-secondary",
					training.iconSide === "left" && "-left-[10px]",
					training.iconSide === "right" && "-right-[10px]",
				)}
			>
				<Image
					key={training.icon.id}
					src={training.icon.url}
					alt={training.icon.alt}
					fill
					className="aspect-square p-8"
				/>
			</div>
			<h3 className="mb-4 text-3xl text-heading">{training.group}</h3>
			<div className="flex flex-wrap justify-between gap-4">
				{training.session.map((session) => (
					<div key={session.id}>
						<span className="text-base text-accent">{session.dayOfWeek}</span>
						<p className="text-lg text-heading">{session.time}</p>
					</div>
				))}
			</div>
		</div>
	);
};
