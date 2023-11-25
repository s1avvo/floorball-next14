"use client";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

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
						lazyPreloadPrevNext: 3,
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1600: {
						lazyPreloadPrevNext: 1,
						slidesPerView: 4,
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
								height={250}
								width={400}
								sizes="(max-width: 480px) 100vw,
                				(max-width: 768px) 75vw,
                				(max-width: 1060px) 50vw,
                				33vw"
								style={{
									overflow: "hidden",
									objectPosition: "center",
									objectFit: "cover",
								}}
								placeholder={"empty"}
								loading={"lazy"}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
