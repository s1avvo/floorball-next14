import Link from "next/link";
import NextImage from "next/image";
import { type Post } from "@/constants/posts";

type Props = {
	className: string;
	post: Post;
};

export const NewsCard = ({ className, post }: Props) => {
	const { title, updatedAt, paragraph01, paragraph02, link } = post;

	return (
		<div className={className}>
			<article className="basis-full">
				<h2 className="prose-h2 line-clamp-4 text-[42px]/[48px] font-extrabold text-amber-400">
					{title}
				</h2>
				<p className="my-5 text-xs">Dodane: {updatedAt}</p>
				<div className="prose-sm text-blue-900 dark:text-white">
					<p>{paragraph01}</p>
					{paragraph02 && <p>{paragraph02}</p>}
					{link && (
						<div className="flex flex-row justify-end">
							<Link
								href={link}
								className="text-blue-950 dark:text-white"
								target="_blank"
								rel="noopener noreferrer"
							>
								<NextImage src={"/assets/facebook.svg"} alt={"facebook"} width={32} height={32} />
							</Link>
						</div>
					)}
				</div>
			</article>
		</div>
	);
};
