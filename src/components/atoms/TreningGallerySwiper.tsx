"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import NextImage from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import { GalleryData } from "@/constants/gallery";

export const TreningGallerySwiper = () => {
	return (
		<div>
			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					700: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					860: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				freeMode={true}
				pagination={{
					clickable: true,
					type: "bullets",
				}}
				modules={[FreeMode, Pagination]}
			>
				{GalleryData.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="relative mb-10 flex h-56 w-auto cursor-pointer flex-col overflow-hidden rounded-md shadow-lg">
							<NextImage
								src={item.image}
								alt={item.alt}
								fill
								sizes={"max-height: 224px"}
								style={{
									overflow: "hidden",
									objectPosition: "center",
									objectFit: "cover",
								}}
								priority
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
