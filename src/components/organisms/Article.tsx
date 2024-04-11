import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { type Route } from "next";
import { NewsHtml } from "@ui/NewsHtml";
import { Facebook } from "@ui/Facebook";
import { type ArticleItemFragment } from "@/gql/graphql";

export const Article = async ({ article }: { article: ArticleItemFragment }) => {
	const { title, createdat, text, link, slug, image } = article;
	const date = new Date(createdat).toLocaleDateString("en-GB");

	return (
		<>
			<div className="relative h-64 w-full overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-96">
				<DatoImage
					data={image.responsiveImage!}
					layout="responsive"
					objectFit="cover"
					objectPosition={"50% 50%"}
					style={{
						height: "100%",
					}}
				/>

				{image.responsiveImage?.title === "News default" && (
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
				)}
			</div>

			<article className="relative p-8 sm:p-12" data-aos-id-article>
				<span className="text-sm text-accent" data-aos="fade-up" data-aos-anchor="[data-aos-id-article]">
					Dodane: {date}
				</span>
				<Link href={`/aktualnosci/${slug}`}>
					<h1
						className="mb-8 mt-2 break-words text-3xl text-secondary sm:text-4xl"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-anchor="[data-aos-id-article]"
					>
						{title}
					</h1>
				</Link>
				<div className="prose-xl text-base text-cardparagraph" data-aos="fade-up">
					<NewsHtml html={text} />
				</div>

				{link && (
					<div className="absolute right-8 top-0" data-aos="fade-up">
						<Link href={link as Route} target="_blank" rel="noopener noreferrer" aria-label="Facebook - Floorball Śrem">
							<Facebook />
						</Link>
					</div>
				)}
			</article>
		</>
	);
};
