import React from "react";
import { Image as DatoImage } from "react-datocms";
import { type ResponsiveImageFragment } from "@/gql/graphql";

export const AboutUsSection = async ({
	title,
	paragraphs,
	image,
}: {
	title: React.ReactNode;
	paragraphs: string[];
	image: ResponsiveImageFragment | undefined | null;
}) => {
	return (
		<>
			<article className="p-8 sm:p-12 lg:w-1/2">
				{title}
				{paragraphs.map((p, index) => (
					<p
						key={index}
						className="prose-sm mt-8 text-base text-cardparagraph"
						data-aos="fade-up"
						data-aos-delay={200 * (index + 1)}
					>
						{p}
					</p>
				))}
			</article>

			<div className="h-64 w-full self-end overflow-hidden rounded-xl shadow-lg sm:h-96 lg:w-1/2">
				{image && (
					<DatoImage
						data={image}
						layout="responsive"
						objectFit="cover"
						style={{
							height: "100%",
						}}
					/>
				)}
			</div>
		</>
	);
};
