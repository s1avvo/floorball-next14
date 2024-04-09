"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { TrainerCard } from "@/components/molecules/TrainerCard";
import { type TrainerItemFragment } from "@/gql/graphql";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export const TrainerSwiper = ({ trainers }: { trainers: TrainerItemFragment[] }) => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					grid: {
						rows: 1,
						fill: "row",
					},
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1,
					grid: {
						rows: 2,
						fill: "row",
					},
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: "row",
					},
					spaceBetween: 10,
				},
			}}
			pagination={{ type: "bullets", clickable: true }}
			modules={[Grid, Pagination]}
		>
			{trainers.map((item) => (
				<SwiperSlide key={item.id}>
					<TrainerCard trainer={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
