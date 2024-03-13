"use client";
import { useState } from "react";
import { type ArticleItemFragment } from "@/gql/graphql";
import { NewsCard } from "@ui/NewsCard";
import { CustomButton } from "@ui/CustomButton";
import { getNewsAction } from "@/app/aktualnosci/action";

const NUMBER_OF_NEWS_TO_FETCH = 4;

export const NewsList = ({ initialNews, countNews }: { initialNews: ArticleItemFragment[]; countNews: number }) => {
	const [offset, setOffset] = useState(NUMBER_OF_NEWS_TO_FETCH);
	const [news, setNews] = useState<ArticleItemFragment[]>(initialNews);
	const isMoreNews = countNews > offset;

	const loadMoreNews = async () => {
		const moreNews = await getNewsAction(NUMBER_OF_NEWS_TO_FETCH, offset);
		setNews((prev) => [...prev, ...moreNews]);
		setOffset((prev) => prev + NUMBER_OF_NEWS_TO_FETCH);
	};

	return (
		<>
			{news.map((news) => (
				<NewsCard key={news.id} news={news} />
			))}

			{isMoreNews && (
				<div className="mx-auto">
					<CustomButton size="regular" onClick={loadMoreNews}>
						Więcej...
					</CustomButton>
				</div>
			)}
		</>
	);
};
