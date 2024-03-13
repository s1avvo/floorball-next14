import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { type Metadata, type Route } from "next";
import { NewsHtml } from "@ui/NewsHtml";
import { Facebook } from "@ui/Facebook";
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

	const { title, createdat, text, link, slug } = article;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<div className="relative min-h-96 w-full">
				<Image
					fill
					src={"https://www.datocms-assets.com/120233/1710275222-trening_header.webp"}
					alt="Floorball Śrem Trening"
					quality={90}
					priority
					sizes="(min-width: 1380px) 632px, (min-width: 1040px) calc(37.5vw + 122px), (min-width: 980px) 896px, (min-width: 780px) calc(64.44vw + 277px), (min-width: 640px) calc(26.67vw + 469px), (min-width: 480px) 448px, calc(92.5vw + 23px)"
					style={{
						height: "100%",
						aspectRatio: "1/1",
						objectFit: "cover",
						overflow: "hidden",
						objectPosition: "center",
						borderRadius: "10px",
					}}
				/>
				<small className="absolute bottom-2 right-2 text-sm">Photo by Astrid Schaffner on Unsplash</small>
			</div>
			<article className="relative rounded-lg bg-primary px-8 pb-8 pt-10">
				<span className="text-sm text-accent">Dodane: {date}</span>
				<Link href={`/aktualnosci/${slug}`}>
					<h1 className="mb-8 mt-2 text-4xl text-heading sm:text-5xl">{title}</h1>
				</Link>
				<div className="prose mb-8 text-base text-paragraph prose-a:text-paragraph prose-strong:text-accent">
					<NewsHtml html={text} />
				</div>

				{link && (
					<div className="absolute right-4 top-4">
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
		</div>
	);
}
