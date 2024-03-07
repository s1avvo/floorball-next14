import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Stick } from "@/components/atoms/Stick";
import { NewsCard } from "@/components/atoms/NewsCard";
import { getNewsBySlug, getNewsSlug } from "@/app/api/getNews";

export const generateStaticParams = async () => {
	const news = await getNewsSlug();
	return news.map((article: { slug: string }) => ({ slug: article.slug }));
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const article = await getNewsBySlug(params.slug);

	if (!article) {
		return {
			title: "Unihokej | Floorball Śrem | News",
			description:
				"Śremski Klub Unihokeja - klub pasjonatów unihokeja. Zapraszamy wszsytkich chętnych na treningi Unihokeja",
		};
	}

	return {
		metadataBase: new URL("https://floorballsrem.com"),
		title: article?.title,
		description:
			"Śledź naszą stronę internetwą, aby być na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
		alternates: {
			canonical: `/article/${article.slug}`,
		},
		openGraph: {
			images: {
				url: `${process.env.NEXT_PUBLIC_URL}/api/og?slug=${article.slug}`,
				alt: `Floorball Śrem News | ${article.title}`,
			},
		},
	};
}

export default async function Article({ params }: { params: { slug: string } }) {
	const article = await getNewsBySlug(params.slug);

	if (!article) {
		return notFound();
	}

	return (
		<section className="relative mt-8 flex h-full min-h-screen w-full flex-col justify-center px-2 xl:px-48">
			<div className="min-h-[70vh] grid-cols-3 space-y-5 sm:grid sm:space-y-0">
				<div className="col-span-1 flex flex-col items-end justify-between px-4 pt-12 sm:pt-0">
					<div className="hidden w-auto sm:block">
						<Stick fill={"#FFF"} width={130} height={450} className="hidden dark:block" />
						<Stick fill={"#172554"} width={130} height={450} className="block dark:hidden" />
					</div>
					<h2 className="text-6xl xl:text-8xl text-end font-extrabold">NEWS</h2>
				</div>
				<div className="border-amber-400 col-span-2 border-l-4 px-4">
					<NewsCard news={article} />
				</div>
			</div>
		</section>
	);
}
