import { Ball } from "@ui/Icons";
import { type ArticleRecentItemFragment } from "@/gql/graphql";

export const RecentNewsItem = ({ news, delay }: { news: ArticleRecentItemFragment; delay: string }) => {
	const { title, createdat } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<div
			className="relative flex h-full w-full flex-col justify-between rounded-lg bg-primary p-2"
			data-aos="fade-up"
			data-aos-delay={delay}
			data-aos-anchor="[data-aos-id-recentnews]"
		>
			<div>
				<span className="text-sm text-accent">Dodane: {date}</span>
				<h4 className="mb-2 mt-2 line-clamp-3 text-xl text-heading">{title}</h4>
			</div>
			<div className="self-end">
				<Ball fill="#FF8906" height={35} width={35} />
			</div>
		</div>
	);
};
