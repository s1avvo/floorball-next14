import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { type TreningItemFragment } from "@/gql/graphql";

export const TreningCard = ({ trening }: { trening: TreningItemFragment }) => {
	return (
		<div className="relative mt-4 flex w-[330px] flex-col rounded-lg bg-primary px-4 pb-6 pt-48 sm:px-6">
			<div
				className={clsx(
					"absolute -top-[10px] flex h-[175px] w-[200px] justify-center rounded-md bg-secondary",
					trening.iconSide === "left" && "-left-[10px]",
					trening.iconSide === "right" && "-right-[10px]",
				)}
			>
				<Image key={trening.icon.id} src={trening.icon.url} alt={trening.icon.alt} fill className="aspect-square p-8" />
			</div>
			<h3 className="mb-4 text-3xl text-heading">{trening.group}</h3>
			<div className="flex flex-wrap justify-between gap-4">
				{trening.session.map((session) => (
					<div key={session.id}>
						<span className="text-base text-accent">{session.dayOfWeek}</span>
						<h6 className="text-lg text-heading">{session.time}</h6>
					</div>
				))}
			</div>
		</div>
	);
};
