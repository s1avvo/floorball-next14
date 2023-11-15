import { NewsCard } from "@/components/atoms/NewsCard";
import { posts } from "@/constants/posts";
import { Ball } from "@/components/atoms/Ball";
import { Stick } from "@/components/atoms/Stick";

export const News = () => {
	return (
		<section
			className="relative flex h-full min-h-screen w-full flex-col justify-center px-2 pt-14 xl:px-48"
			id="news"
		>
			<div className="grid-cols-3 space-y-5 sm:grid sm:space-y-0">
				<div className="col-span-1 px-4">
					<div className={"relative hidden h-96 w-auto sm:block"}>
						<Stick
							fill={"#FFF"}
							width={110}
							height={380}
							className="absolute right-0 top-0 hidden dark:block"
						/>
						<Stick
							fill={"#01c7eb"}
							width={110}
							height={380}
							className="absolute right-0 top-0 block dark:hidden"
						/>
						{/*<NextImage*/}
						{/*	fill*/}
						{/*	alt="img"*/}
						{/*	src={"/assets/stick.svg"}*/}
						{/*	sizes="(max-width: 480px) 100vw,*/}
						{/*	(max-width: 768px) 75vw,*/}
						{/*	(max-width: 1060px) 50vw,*/}
						{/*	 33vw"*/}
						{/*	style={{*/}
						{/*		objectFit: "contain",*/}
						{/*		objectPosition: "top right",*/}
						{/*	}}*/}
						{/*/>*/}
					</div>
					<h2 className="text-end text-6xl font-extrabold xl:text-8xl">NEWS</h2>{" "}
				</div>
				<NewsCard post={posts[0]} className="col-span-1 border-l-4 border-amber-400 px-4" />
				<NewsCard post={posts[1]} className="col-span-1 border-l-4 border-amber-400 px-4" />
			</div>
			<div className="grid h-32 w-full grid-cols-1 items-end justify-items-end">
				<Ball fill={"#ffcc00"} width={80} height={80} />
			</div>
		</section>
	);
};
