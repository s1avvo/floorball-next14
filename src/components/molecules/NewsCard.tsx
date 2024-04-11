import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { type Route } from "next";
import { type ArticleItemFragment } from "@/gql/graphql";
import { NewsItem } from "@ui/NewsItem";
import { Facebook } from "@ui/Facebook";

export const NewsCard = ({ news, delay, anchor }: { news: ArticleItemFragment; delay?: string; anchor?: string }) => {
	const { image, link, slug } = news;

	return (
		<div
			className="shadow-text/30 relative w-full rounded-lg bg-cardbackground shadow-md"
			data-aos="fade"
			data-aos-delay={delay}
			data-aos-anchor={anchor}
			data-aos-duration="1200"
		>
			<div className="absolute left-0 top-0 aspect-square h-48 w-full overflow-hidden rounded-md">
				<Link href={`/aktualnosci/${slug}`}>
					<DatoImage
						data={image.responsiveImage!}
						layout="responsive"
						objectFit="cover"
						objectPosition="center"
						priority
						style={{
							height: "100%",
						}}
					/>
				</Link>
			</div>

			<NewsItem news={news} />

			{link && (
				<div className="absolute right-4 top-4">
					<Link href={link as Route} target="_blank" rel="noopener noreferrer" aria-label="Facebook - Floorball Śrem">
						<Facebook />
					</Link>
				</div>
			)}
		</div>
	);
};
