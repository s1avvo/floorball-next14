import React from "react";
import { Image as DatoImage } from "react-datocms";
import { ContactForm } from "@ui/ContactForm";
import { type ResponsiveImageFragment } from "@/gql/graphql";

export const ContactSection = async ({
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
			<div className="h-64 w-full self-end overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-[937px] md:w-1/2">
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

			<article className="p-8 sm:p-12 md:w-1/2">
				{title}
				{paragraphs.map((p, index) => (
					<p
						key={index}
						className="prose-sm mb-8 text-base text-cardparagraph"
						data-aos="fade-up"
						data-aos-delay={200 * (index + 1)}
					>
						{p}
					</p>
				))}

				<div data-aos="fade" data-aos-delay="800" data-aos-anchor="[data-aos-id-contact]">
					<ContactForm />
				</div>
			</article>
		</>
	);
};
