"use client";
import { useState } from "react";
import { type ArticleItemFragment } from "@/gql/graphql";
import { NewsCard } from "@ui/NewsCard";
import { NewsItem } from "@ui/NewsItem";
import { CustomButton } from "@ui/CustomButton";

import { getNewsAction } from "@/actions/actions";

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
			{news.map((item, index) => (
				<NewsCard
					key={item.id}
					slug={item.slug}
					image={item.image.responsiveImage!}
					delay={`${((index % 4) + 1) * 200}`}
					anchor="[data-aos-id-news]"
				>
					<NewsItem news={item} />
				</NewsCard>
			))}

			{isMoreNews && (
				<div className="col-span-1 mx-auto md:col-span-2">
					<CustomButton size="regular" onClick={loadMoreNews}>
						Więcej...
					</CustomButton>
				</div>
			)}
		</>
	);
};
