import Link from "next/link";

type Post = {
	id: string;
	createdAt: string;
	updatedAt: Date;
	title: string;
	content: string;
};

type Props = {
	className: string;
	post: Post;
};

export const NewsCard = ({ className, post }: Props) => {
	const { title, updatedAt, content } = post || {};

	return (
		<div className={className}>
			<div className="basis-full">
				<Link href={"#"}>
					<h4 className="prose-h2 line-clamp-4 text-[42px]/[48px] font-extrabold text-amber-400">
						{title}
					</h4>
				</Link>
				<div className="my-5 gap-3">
					<h6 className="text-xs">Dodane: {(updatedAt && updatedAt.toLocaleDateString()) || ""}</h6>
				</div>
				<div className="prose prose-sm text-blue-900 dark:text-white">
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</div>
		</div>
	);
};
