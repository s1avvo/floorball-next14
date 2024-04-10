"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type ArticleItemFragment } from "@/gql/graphql";
import { NewsHtml } from "@ui/NewsHtml";
import { LucideIconWithText } from "@ui/LucideIconWithText";

export const NewsItem = ({ news }: { news: ArticleItemFragment }) => {
	const [isClamp, setIsClamp] = useState(true);

	const { title, createdat, text, slug } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<article className="relative z-10 mt-40  px-4 pb-4 pt-10">
			<span className="text-sm text-accent">Dodane: {date}</span>
			<Link href={`/aktualnosci/${slug}`}>
				<h4 className={`${isClamp ? "line-clamp-2" : "line-clamp-none"} mb-4 mt-2 min-h-24 text-2xl text-secondary`}>
					{title}
				</h4>
			</Link>
			<div
				className={`${isClamp ? "line-clamp-5" : "line-clamp-none"} prose mb-8  text-base text-cardparagraph dark:prose-a:text-cardparagraph dark:prose-strong:text-cardparagraph`}
			>
				<NewsHtml html={text} />
			</div>

			<div className="flex justify-end">
				<button className="text-base text-accent" onClick={() => setIsClamp(!isClamp)}>
					{isClamp ? (
						<LucideIconWithText Icon={ChevronDown} style={"rounded-full bg-accent text-heading"} size={24} isReversed>
							rozwiń
						</LucideIconWithText>
					) : (
						<LucideIconWithText Icon={ChevronUp} style={"rounded-full bg-accent text-heading"} size={24} isReversed>
							zwiń
						</LucideIconWithText>
					)}
				</button>
			</div>
		</article>
	);
};
