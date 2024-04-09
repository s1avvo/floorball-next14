import { RecentNewsItem } from "@ui/RecentNewsItem";
import { getNewsRecent } from "@/api/getNews";

export const RecentNewsList = async () => {
	const recentNews = await getNewsRecent(4);

	return (
		<aside className="px-4 sm:px-0">
			<hr className="mb-8 w-full border-2 border-accent" />
			<h3 className="mb-8 text-center text-2xl text-secondary" data-aos-id-recentnews>
				Ostatnie wiadomości
			</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{recentNews.map((item, index) => (
					<RecentNewsItem key={item.id} news={item} delay={`${(index + 1) * 200}`} />
				))}
			</div>
		</aside>
	);
};
