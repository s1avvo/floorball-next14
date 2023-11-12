import NextImage from "next/image";
import { NewsCard } from "@/components/atoms/NewsCard";
import { posts } from "@/constants/posts";

export const News = () => {
	return (
		<section
			className="relative flex h-full min-h-screen w-full flex-col justify-center bg-[#000728] px-2 xl:px-48"
			id="news"
		>
			<div className="grid-cols-3 space-y-5 pt-8 sm:grid sm:space-y-0 md:pt-0">
				<div className="col-span-1 self-end px-4">
					<div className={"relative hidden h-80 w-auto sm:block"}>
						<NextImage
							fill
							alt="img"
							src={"/assets/stick.svg"}
							sizes="(max-width: 480px) 100vw,
                			(max-width: 768px) 75vw,
                			(max-width: 1060px) 50vw,
               				 33vw"
							style={{
								objectFit: "contain",
								objectPosition: "top right",
							}}
						/>
					</div>
					<h2 className="text-end text-6xl font-extrabold text-neutral-100 xl:text-8xl">NEWS</h2>{" "}
				</div>
				<NewsCard post={posts[0]} className="col-span-1 border-l-4 border-amber-400 px-4" />
				<NewsCard post={posts[1]} className="col-span-1 border-l-4 border-amber-400 px-4" />
			</div>
		</section>
	);
};
