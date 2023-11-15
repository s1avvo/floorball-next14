import Link from "next/link";

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	content: string;
};

type Props = {
	className: string;
	post: Post;
};

export const NewsCard = ({ className, post }: Props) => {
	const { title, createdAt, content } = post || {};

	const date = new Date(createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" } as {};
	const formattedDate = date.toLocaleDateString("en-US", options);

	return (
		<div className={className}>
			{/*<Link*/}
			{/*	className="basis-full rounded-t-md hover:opacity-70"*/}
			{/*	// href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}*/}
			{/*	href={"#"}*/}
			{/*>*/}
			{/*	<div className={`relative mb-3 w-auto ${imageHeight}`}>*/}
			{/*		<NextImage*/}
			{/*			fill*/}
			{/*			alt="img"*/}
			{/*			src={image}*/}
			{/*			sizes="(max-width: 480px) 100vw,*/}
			{/*    		(max-width: 768px) 75vw,*/}
			{/*    		(max-width: 1060px) 50vw,*/}
			{/*   			 33vw"*/}
			{/*			style={{*/}
			{/*				objectPosition: "center",*/}
			{/*				objectFit: "cover",*/}
			{/*				borderRadius: "0.375rem",*/}
			{/*			}}*/}
			{/*		/>*/}
			{/*	</div>*/}
			{/*</Link>*/}
			<div className="basis-full">
				{/*<Link href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>*/}
				<Link href={"#"}>
					<h4 className="prose-h2 line-clamp-4 text-5xl/[54px] font-extrabold text-amber-400">
						{title}
					</h4>
				</Link>
				<div className="my-5 gap-3">
					<h6 className="text-xs">{formattedDate}</h6>
				</div>
				<p className="prose prose-sm text-blue-900 dark:text-white">{content}</p>
			</div>
		</div>
	);
};
