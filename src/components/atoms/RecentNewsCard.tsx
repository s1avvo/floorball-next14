import Link from "next/link";
import { Ball } from "@ui/Ball";
import { type ArticleRecentItemFragment } from "@/gql/graphql";

export const RecentNewsCard = ({ news }: { news: ArticleRecentItemFragment }) => {
	const { title, createdat, slug } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<div className="relative flex flex-col justify-between rounded-lg bg-primary p-2">
			<div>
				<span className="text-sm text-accent">Dodane: {date}</span>
				<Link href={`/aktualnosci/${slug}`}>
					<h4 className="mb-2 mt-2 line-clamp-3 text-xl text-heading">{title}</h4>
				</Link>
			</div>
			<div className="self-end">
				<Ball fill="#FF8906" height={35} width={35} />
			</div>
		</div>
	);
};
