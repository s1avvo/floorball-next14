"use client";
import { useState } from "react";
import Link from "next/link";
import { type Route } from "next";
import { ChevronRight } from "lucide-react";
import { type ArticleItemFragment } from "@/gql/graphql";
import { LucideIconWithText } from "@ui/LucideIconWithText";
import { NewsHtml } from "@ui/NewsHtml";
import { Facebook } from "@ui/Facebook";

export const NewsClipItem = ({ news }: { news: ArticleItemFragment }) => {
	const [isHovered, setIsHovered] = useState(false);

	const { slug, title, createdat, text, link } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<article className="relative z-10 mt-44 flex flex-col justify-between p-4 sm:min-h-48">
			<span className="absolute -top-40 rounded-full bg-cardbackground px-2 text-sm text-accent dark:bg-accent dark:text-heading">
				Dodane: <strong>{date}</strong>
			</span>
			<>
				<h4 className="my-4 line-clamp-2 text-2xl text-secondary">{title}</h4>
				<div
					className={`prose mb-8 text-base text-cardparagraph dark:prose-a:text-cardparagraph dark:prose-strong:text-cardparagraph`}
					hidden={true}
					aria-hidden={true}
				>
					<NewsHtml html={text} />
				</div>
			</>
			<div className="ms-auto w-fit rounded-full bg-accent ps-4 text-base text-heading hover:bg-accent/90">
				<Link
					href={`/aktualnosci/${slug}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<LucideIconWithText
						Icon={ChevronRight}
						size={28}
						style={`transition delay-150 duration-500 ease-in-out ${isHovered ? "-translate-x-2" : "translate-x-0"}`}
						isReversed
					>
						więcej...
					</LucideIconWithText>
				</Link>
			</div>

			{link && (
				<div className="absolute -top-40 right-4">
					<Link href={link as Route} target="_blank" rel="noopener noreferrer" aria-label="Facebook - Floorball Śrem">
						<Facebook />
					</Link>
				</div>
			)}
		</article>
	);
};
