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
			<div className="basis-full">
				<Link href={"#"}>
					<h4 className="prose-h2 line-clamp-4 text-[42px]/[48px] font-extrabold text-amber-400">
						{title}
					</h4>
				</Link>
				<div className="my-5 gap-3">
					<h6 className="text-xs">Dodane: {updatedAt}</h6>
				</div>
				<div className="prose prose-sm text-blue-900 dark:text-white">
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
			</div>
		</div>
	);
};
