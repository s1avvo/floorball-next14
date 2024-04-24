import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import React from "react";
import { type ResponsiveImageFragment } from "@/gql/graphql";

export const NewsCard = ({
	slug,
	image,
	delay,
	anchor,
	children,
}: {
	slug: string;
	image: ResponsiveImageFragment;
	delay?: string;
	anchor?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className="shadow-text/30 relative w-full rounded-b-xl rounded-t-2xl bg-cardbackground shadow-md"
			data-aos="fade"
			data-aos-delay={delay}
			data-aos-anchor={anchor}
			data-aos-duration="1200"
		>
			<div className="absolute left-0 top-0 h-48 w-full overflow-hidden rounded-xl">
				<Link href={`/aktualnosci/${slug}`}>
					<DatoImage
						data={image}
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
						priority
						className="h-full transition-transform duration-300 ease-in-out hover:scale-105"
					/>
				</Link>
			</div>
			{children}
		</div>
	);
};
