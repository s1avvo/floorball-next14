import Link from "next/link";
import NextImage from "next/image";

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	content: string;
	image: string;
	snippet: string;
};

type Props = {
	className: string;
	imageHeight: string;
	post: Post;
};

export const NewsCard = ({ className, imageHeight, post }: Props) => {
	const { title, createdAt, image, snippet } = post || {};

	const date = new Date(createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" } as {};
	const formattedDate = date.toLocaleDateString("en-US", options);

	return (
		<div className={className}>
			<Link
				className="basis-full  rounded-t-md hover:opacity-70"
				// href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}
				href={"#"}
			>
				<div className={`relative mb-3 w-auto ${imageHeight}`}>
					<NextImage
						fill
						alt="img"
						src={image}
						sizes="(max-width: 480px) 100vw,
                		(max-width: 768px) 75vw,
                		(max-width: 1060px) 50vw,
               			 33vw"
						style={{
							objectFit: "cover",
							borderRadius: "0.375rem",
						}}
					/>
				</div>
			</Link>
			<div className="basis-full">
				{/*<Link href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>*/}
				<Link href={"#"}>
					<h4 className="hover:text-accent-green line-clamp-2 text-base font-bold">{title}</h4>
				</Link>
				<div className="my-2 gap-3">
					<h6 className="text-wh-300 text-xs">{formattedDate}</h6>
				</div>
				<p className="text-wh-500 line-clamp-3">{snippet}</p>
			</div>
		</div>
	);
};
