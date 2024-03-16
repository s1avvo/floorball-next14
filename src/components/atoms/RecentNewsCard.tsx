import Link from "next/link";
import { Ball } from "@ui/Ball";
import { type ArticleItemFragment } from "@/gql/graphql";

export const RecentNewsCard = ({ news }: { news: ArticleItemFragment }) => {
	const { title, createdat, slug } = news;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<div className="relative flex flex-col justify-between rounded-lg bg-secondary px-2 pb-2 pt-2 shadow-md">
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
