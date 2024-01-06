import Link from "next/link";
import { NewsCard } from "@/components/atoms/NewsCard";
import { Stick } from "@/components/atoms/Stick";
import { Button } from "@/components/atoms/Button";
import { getNewsLastTwo } from "@/app/api/getNews";
import { type NewsType } from "@/types/news";

export const News = async () => {
	const news = await getNewsLastTwo();

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
				{news.map((post: NewsType) => {
					return (
						<NewsCard
							key={post.id}
							post={post}
							className="col-span-1 border-l-4 border-amber-400 px-4"
						/>
					);
				})}
			</div>
			<div className="me-4 grid h-20 grid-cols-1 items-end justify-items-end">
				<Link href={"/news/2"}>
					<Button label="Więcej" />
				</Link>
			</div>
		</section>
	);
};
