import { notFound } from "next/navigation";
import { type Route } from "next";
import Link from "next/link";
import { Stick } from "@/components/atoms/Stick";
import { NewsCard } from "@/components/atoms/NewsCard";
import { Pagination } from "@/components/molecules/Pagination";
import { Button } from "@/components/atoms/Button";
import { getNewsCount, getNewsWithPagination } from "@/app/api/getNews";

const LIMIT = 2;

type NewsProps = {
	params: {
		pageNumber: string;
	};
};

export const generateStaticParams = async () => {
	const count = await getNewsCount();
	const pages = Math.ceil(Number(count) / LIMIT);

	return Array.from({ length: pages }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

export default async function News({ params }: NewsProps) {
	const { pageNumber = "1" } = params;
	const currentPage = Number(pageNumber);
	const offset = (currentPage - 1) * LIMIT;

	const news = await getNewsWithPagination(LIMIT, offset);
	if (!news || news.length === 0) {
		return notFound();
	}

	const count = await getNewsCount();

	return (
		<section className="relative mt-8 flex h-full min-h-screen w-full flex-col justify-center px-2 xl:px-48">
			<div className="min-h-[70vh] grid-cols-3 space-y-5 sm:grid sm:space-y-0">
				<div className="col-span-1 flex flex-col items-end justify-between px-4 pt-12 sm:pt-0">
					<div className="hidden w-auto sm:block">
						<Stick fill={"#FFF"} width={130} height={450} className="hidden dark:block" />
						<Stick fill={"#172554"} width={130} height={450} className="block dark:hidden" />
					</div>
					<h2 className="text-end text-6xl font-extrabold xl:text-8xl">NEWS</h2>{" "}
				</div>
				{news.map((post) => {
					return (
						<NewsCard
							key={post.slug}
							post={post}
							className="col-span-1 border-l-4 border-amber-400 px-4"
						/>
					);
				})}
			</div>
			<div className="mb-4 grid h-24 grid-cols-1 items-end justify-items-end">
				<div className="flex w-full flex-row items-end justify-end gap-10">
					<Link href={"/#news"}>
						<Button label="Powrót" />
					</Link>
					<Pagination
						limit={LIMIT}
						currentPage={currentPage}
						productsCount={Number(count)}
						href={"/news" as Route}
					/>
				</div>
			</div>
		</section>
	);
}
