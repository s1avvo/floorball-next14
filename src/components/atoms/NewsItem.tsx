"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { type Route } from "next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type ArticleItemFragment } from "@/gql/graphql";
import { LucideIconWithText } from "@ui/LucideIconWithText";
import { NewsHtml } from "@ui/NewsHtml";
import { Facebook } from "@ui/Facebook";

export const NewsItem = ({ news }: { news: ArticleItemFragment }) => {
	const textRef = useRef<HTMLDivElement>(null);
	const [isHidden, setIsHidden] = useState(false);
	const [numberOfLines, setNumberOfLines] = useState(0);

	const { slug, title, createdat, text, link } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	useEffect(() => {
		if (textRef.current) {
			const containerHeight = textRef.current.clientHeight;
			const lines = Math.floor(containerHeight / 28.8);

			setIsHidden(lines > 5);
			setNumberOfLines(lines);
		}
	}, [text]);

	return (
		<article className="relative z-10 mt-44 p-4 sm:min-h-[360px]">
			<span className="absolute -top-40 rounded-full bg-cardbackground px-2 text-sm text-accent dark:bg-accent dark:text-heading">
				Dodane: <strong>{date}</strong>
			</span>
			<h4 className={`${isHidden ? "line-clamp-2" : "line-clamp-none"} my-4 min-h-24 text-2xl text-secondary`}>
				{title}
			</h4>
			<div
				ref={textRef}
				className={`${isHidden ? "line-clamp-5" : "line-clamp-none"} prose text-base text-cardparagraph dark:prose-a:text-cardparagraph dark:prose-strong:text-cardparagraph`}
			>
				<NewsHtml html={text} />
			</div>

			<div className="mt-8 flex justify-end gap-2">
				{numberOfLines > 5 && (
					<div
						className="scale-100 rounded-full bg-accent ps-4 text-base text-heading hover:opacity-90"
						onClick={() => setIsHidden(!isHidden)}
					>
						{isHidden ? (
							<LucideIconWithText Icon={ChevronDown} size={28} isReversed>
								rozwiń
							</LucideIconWithText>
						) : (
							<LucideIconWithText Icon={ChevronUp} size={28} isReversed>
								zwiń
							</LucideIconWithText>
						)}
					</div>
				)}
				<Link
					href={`/aktualnosci/${slug}`}
					aria-label={`Czytaj więcej o ${title}`}
					className="rounded-full bg-accent px-2 text-base text-heading hover:opacity-90"
				>
					...
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
