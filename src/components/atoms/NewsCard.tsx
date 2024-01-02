import Link from "next/link";
import NextImage from "next/image";
import { type Route } from "next";
import { type News } from "@/types/news";

type Props = {
	className: string;
	post: News;
};

export const NewsCard = ({ className, post }: Props) => {
	const { title, updatedAt, first_paragraph, second_paragraph, link } = post;

	return (
		<div className={className}>
			<article className="basis-full">
				<Link href={`/article/${post.id}`}>
					<h2 className="prose-h2 line-clamp-4 text-[42px]/[48px] font-extrabold text-amber-400">
						{title}
					</h2>
				</Link>
				<p className="my-5 text-xs">Dodane: {updatedAt.toLocaleDateString()}</p>
				<div className="prose-sm text-blue-900 dark:text-white">
					<p>{first_paragraph}</p>
					{second_paragraph && <p>{second_paragraph}</p>}
					{link && (
						<div className="flex justify-end">
							<Link
								href={link as Route}
								className="text-blue-950 dark:text-white"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center gap-3">
									<span>Więcej szczegółów na</span>
									<NextImage
										src={"/assets/facebook.svg"}
										alt={"facebook"}
										width={32}
										height={32}
										className="rounded-full border border-dark bg-dark"
									/>
								</div>
							</Link>
						</div>
					)}
				</div>
			</article>
		</div>
	);
};
