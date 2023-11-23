import Link from "next/link";
import { posts } from "@/constants/posts";
import { NewsCard } from "@/components/atoms/NewsCard";
import { Stick } from "@/components/atoms/Stick";
import { Button } from "@/components/atoms/Button";

export const News = () => {
	const news = posts
		.map((post) => ({ ...post, updatedAt: new Date(post.createdAt) }))
		.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
		.slice(0, 2);

	return (
		<section
			className="relative mt-8 flex h-full min-h-screen w-full flex-col justify-center px-2 xl:px-48"
			id="news"
		>
			<div className="min-h-[50vh] grid-cols-3 space-y-5 md:grid md:space-y-0">
				<div className="col-span-1 flex flex-col items-end justify-between px-4 pt-12 sm:pt-0">
					<div className="hidden w-auto md:block">
						<Stick fill={"#FFF"} width={120} height={400} className="hidden dark:block" />
						<Stick fill={"#172554"} width={120} height={400} className="block dark:hidden" />
					</div>
					<h2 className="text-end text-6xl font-extrabold xl:text-8xl">NEWS</h2>{" "}
				</div>
				{news.map((post) => {
					return (
						<NewsCard
							key={post.id}
							post={{ ...post, updatedAt: post.updatedAt.toLocaleDateString() }}
							className="col-span-1 border-l-4 border-amber-400 px-4"
						/>
					);
				})}
			</div>
			<div className="me-4 grid h-20 grid-cols-1 items-end justify-items-end">
				<Link href={"/news/2"}>
					<Button label="Czytaj więcej" />
				</Link>
			</div>
		</section>
	);
};
