import React from "react";
import { Image as DatoImage } from "react-datocms";
import { type ResponsiveImageFragment } from "@/gql/graphql";

export const TrainingSection = async ({
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
			{image && (
				<div className="relative h-64 w-full self-end overflow-hidden rounded-xl shadow-lg md:h-96 md:w-1/2">
					<DatoImage
						data={image}
						layout="responsive"
						objectFit="cover"
						style={{
							height: "100%",
						}}
					/>
					<small className="absolute bottom-2 right-2 bg-cardbackground/10 px-2 text-sm text-cardparagraph backdrop-blur-sm">
						Photo by{" "}
						<a href="https://unsplash.com/@familyschaffner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							Astrid Schaffner
						</a>{" "}
						on{" "}
						<a href="https://unsplash.com/photos/a-basket-with-eggs-and-a-ball-v48GB3ArQ90?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							Unsplash
						</a>
					</small>
				</div>
			)}

			<article className="p-8 sm:p-12 md:w-1/2">
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
		</>
	);
};
