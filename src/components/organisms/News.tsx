import { NewsCard } from "@/components/atoms/NewsCard";
import { posts } from "@/constants/posts";

export const News = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col bg-white" id="news">
			{/*Trening bottom*/}
			<div className="absolute left-0 top-0 hidden w-full gap-8 px-4 sm:px-10 xl:flex xl:px-48">
				<div className="basis-1/3" />
				<div className="h-14 w-full basis-1/3 rounded-b-md bg-amber-400" />
				<div className="h-8 w-full basis-1/3 rounded-b-md bg-amber-400" />
			</div>

			<div className="flex h-full min-h-screen w-full flex-col px-10 pt-28 sm:px-20 xl:px-48">
				{/*<div className="mb-16 ps-40 text-3xl font-semibold text-blue-950 sm:ps-20 sm:text-5xl xl:ps-56 xl:text-8xl">*/}
				{/*	AKTUALNOŚCI*/}
				{/*</div>*/}
				<div className="my-2 grid-cols-2 grid-rows-3 gap-x-4 gap-y-4 sm:grid">
					<NewsCard imageHeight="h-96" post={posts[0]} className="col-span-1 row-span-3" />
					<NewsCard
						imageHeight="h-40"
						post={posts[1]}
						className="col-span-1 row-span-1 mt-5 flex justify-between gap-3 sm:mt-0"
					/>
					<NewsCard
						imageHeight="h-40"
						post={posts[2]}
						className="col-span-1 row-span-1 mt-5 flex justify-between gap-3 sm:mt-0"
					/>
					<NewsCard
						imageHeight="h-40"
						post={posts[3]}
						className="col-span-1 row-span-1 mt-5 flex justify-between gap-3 sm:mt-0"
					/>
				</div>
			</div>
		</section>
	);
};
