import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Article } from "@ui/Article";
import { RecentNewsList } from "@ui/RecentNewsList";
import { articleStructuredData } from "@/constants/structuredData ";

import { getNewsBySlug, getNewsSlug } from "@/api/getNews";

export const generateStaticParams = async () => {
	const news = await getNewsSlug();
	return news.map((article: { slug: string }) => ({ slug: article.slug }));
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const article = await getNewsBySlug(params.slug);

	if (!article) {
		return {
			title: "Floorball Śrem - aktualności...",
			description:
				"Śledź naszą stronę internetwą, aby być na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
		};
	}

	return {
		title: `Floorball Śrem - ${article?.title}`,
		description:
			"Śledź naszą stronę internetwą, aby być na bieżąco z najnowszymi informacjami, relacjami z wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.",
		alternates: {
			canonical: `/aktualnosci/${article.slug}`,
		},
		openGraph: {
			title: `${article?.title}`,
			description: `${article.text.slice(0, 160).replace(/(<([^>]+)>)/gi, "")}...`,
			url: `${process.env.NEXT_PUBLIC_URL}/aktualnosci/${article.slug}`,
			images: {
				url: `${process.env.NEXT_PUBLIC_URL}/api/og?slug=${article.slug}`,
				alt: `Floorball Śrem - ${article.title}`,
			},
			siteName: "floorballsrem.com",
			locale: "pl",
			type: "website",
		},
	};
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
	const article = await getNewsBySlug(params.slug);

	if (!article) {
		return notFound();
	}

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData(article)) }}
			/>
			<section className="space-y-8 md:col-span-2">
				<Article article={article} />

				<Suspense fallback={<div className="mx-auto">Loading...</div>}>
					<RecentNewsList />
				</Suspense>
			</section>
		</>
	);
}
