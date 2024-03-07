"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type Route } from "next";
import { Facebook } from "@ui/Facebook";
import { NewsHtml } from "@ui/NewsHtml";
import { type ArticleItemFragment } from "@/gql/graphql";

export const NewsCard = ({ news }: { news: ArticleItemFragment }) => {
	const [isClamp, setIsClamp] = useState(true);

	const { title, createdat, text, link, slug } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<article className="relative rounded-lg bg-heading px-4 pb-4 pt-10 shadow-md">
			<span className="text-sm text-accent">Dodane: {date}</span>
			<Link href={`/aktualnosci/${slug}`}>
				<h4 className="mb-8 mt-2 text-3xl text-secondary">{title}</h4>
			</Link>
			<div className={`${isClamp ? "line-clamp-6" : "line-clamp-none"} prose mb-8 text-base text-black`}>
				<NewsHtml html={text} />
			</div>
			<div className="flex justify-end">
				<button className="text-base text-accent" onClick={() => setIsClamp(!isClamp)}>
					{isClamp ? (
						<span className="inline-flex items-center gap-2">
							<span>rozwiń</span>
							<ChevronDown className="rounded-full bg-accent text-heading" />
						</span>
					) : (
						<span className="inline-flex items-center gap-2">
							<span>zwiń</span>
							<ChevronUp className="rounded-full bg-accent text-heading" />
						</span>
					)}
				</button>
			</div>

			{link && (
				<div className="absolute right-2 top-2">
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
			)}
		</article>
	);
};
