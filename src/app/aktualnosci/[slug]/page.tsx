import Link from "next/link";
import { notFound } from "next/navigation";
import { Image as DatoImage } from "react-datocms";
import { type Metadata, type Route } from "next";
import { NewsHtml } from "@ui/NewsHtml";
import { Facebook } from "@ui/Facebook";
import { RecentNewsCard } from "@/components/atoms/RecentNewsCard";
import { getNewsBySlug, getNewsSlug, getNewsRecent } from "@/app/api/getNews";

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
	const recentNews = await getNewsRecent(4);

	if (!article) {
		return notFound();
	}

	const { title, createdat, text, link, slug } = article;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<section className="space-y-8 md:col-span-2">
			<div className="relative h-64 w-full overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-96">
				<DatoImage
					data={article.image.responsiveImage!}
					layout="responsive"
					objectFit="cover"
					objectPosition={"50% 50%"}
					priority
					style={{
						height: "100%",
					}}
				/>
				<small className="absolute bottom-2 right-2 bg-cardbackground/10 px-2 text-sm text-cardparagraph backdrop-blur-sm">
					Photo by{" "}
					<a href="https://unsplash.com/@familyschaffner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
						Astrid Schaffner
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/photos/a-pair-of-shoes-on-a-carpet-bi_amI3F4co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
						Unsplash
					</a>
				</small>
			</div>

			<article className="relative p-8 sm:p-12">
				<span className="text-sm text-accent">Dodane: {date}</span>
				<Link href={`/aktualnosci/${slug}`}>
					<h1 className="mb-8 mt-2 break-words text-3xl text-secondary sm:text-5xl">{title}</h1>
				</Link>
				<div className="prose-xl text-base text-cardparagraph">
					<NewsHtml html={text} />
				</div>

				{link && (
					<div className="absolute right-8 top-0">
						<Link
							href={link as Route}
							className="text-blue-950 dark:text-white"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook - Floorball Śrem"
						>
							<Facebook fillColor={"#FF8906"} />
						</Link>
					</div>
				)}
			</article>

			{recentNews.length > 0 && (
				<aside className="px-4 sm:px-0">
					<hr className="mb-8 w-full border-2 border-accent" />
					<h3 className="mb-8 text-center text-2xl text-secondary">Ostatnie wiadomości</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
						{recentNews.map((item) => (
							<RecentNewsCard key={item.id} news={item} />
						))}
					</div>
				</aside>
			)}
		</section>
	);
}
