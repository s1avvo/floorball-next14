"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type Route } from "next";
import { Facebook } from "@ui/Facebook";
import { NewsHtml } from "@ui/NewsHtml";
import { LucideIconWithText } from "@ui/LucideIconWithText";
import { type ArticleFirstItemFragment } from "@/gql/graphql";

export const NewsCard = ({
	news,
	delay,
	anchor,
}: {
	news: ArticleFirstItemFragment;
	delay?: string;
	anchor?: string;
}) => {
	const [isClamp, setIsClamp] = useState(true);

	const { title, createdat, text, link, slug } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<article
			className="shadow-text/30 relative w-full rounded-lg bg-cardbackground px-4 pb-4 pt-10 shadow-md"
			data-aos="fade"
			data-aos-delay={delay}
			data-aos-anchor={anchor}
			data-aos-duration="1200"
		>
			<div className="absolute left-0 top-0 h-24 w-full rounded-md bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0" />

			<span className="text-sm text-accent">Dodane: {date}</span>
			<Link href={`/aktualnosci/${slug}`}>
				<h4 className={`${isClamp ? "line-clamp-3" : "line-clamp-none"} mb-8 mt-2 text-3xl text-secondary`}>{title}</h4>
			</Link>
			<div
				className={`${isClamp ? "line-clamp-6" : "line-clamp-none"} prose mb-8 text-base text-cardparagraph dark:prose-a:text-cardparagraph dark:prose-strong:text-cardparagraph`}
			>
				<NewsHtml html={text} />
			</div>
			<div className="flex justify-end">
				<button className="text-base text-accent" onClick={() => setIsClamp(!isClamp)}>
					{isClamp ? (
						<LucideIconWithText
							Icon={ChevronDown}
							style={"rounded-full bg-accent text-heading dark:text-paragraph"}
							size={24}
							isReversed
						>
							rozwiń
						</LucideIconWithText>
					) : (
						<LucideIconWithText
							Icon={ChevronUp}
							style={"rounded-full bg-accent text-heading dark:text-paragraph"}
							size={24}
							isReversed
						>
							zwiń
						</LucideIconWithText>
					)}
				</button>
			</div>

			{link ? (
				<div className="absolute right-4 top-4">
					<Link
						href={link as Route}
						className="text-blue-950 dark:text-white"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook - Floorball Śrem"
					>
						<Facebook fillColor={"#FF8906"} />
					</Link>
				</div>
			) : (
				<div className="absolute right-4 top-4 h-7 w-7 rounded-full bg-accent" />
			)}
		</article>
	);
};
