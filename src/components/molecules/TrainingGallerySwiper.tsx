"use client";
import { Image as DatoImage } from "react-datocms";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { type ResponsiveImageFragment } from "@/gql/graphql";

export const TrainingGallerySwiper = ({
	images,
}: {
	images: { id: string; responsiveImage?: ResponsiveImageFragment | undefined | null }[];
}) => {
	return (
		<div>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1600: {
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
				{images.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="relative mb-10 flex h-56 cursor-pointer flex-col overflow-hidden rounded-md shadow-lg sm:h-64">
							<DatoImage
								data={item.responsiveImage!}
								layout="fill"
								objectFit="cover"
								objectPosition="50% 50%"
								style={{ height: "100%" }}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
