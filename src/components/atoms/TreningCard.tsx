import NextImage from "next/image";

type TreningCardProps = {
	className: string;
	imageHeight: string;
	trening: {
		title: string;
		content: string;
		image: string;
	};
};
export const TreningCard = ({ className, imageHeight, trening }: TreningCardProps) => {
	const { title, content, image } = trening || {};

	return (
		<div className={className}>
			<div className="basis-full">
				<div className={`relative mb-2 w-auto ${imageHeight}`}>
					<NextImage
						fill
						alt="img"
						src={image}
						sizes="(max-width: 480px) 100vw,
                		(max-width: 768px) 75vw,
                		(max-width: 1060px) 50vw,
               			 33vw"
						style={{
							objectFit: "contain",
						}}
					/>
				</div>
			</div>

			<div className="border-r-4 border-amber-400">
				<h2 className="z-10 px-4 py-2 text-6xl font-bold text-neutral-100">
					{title} <span className="text-2xl font-light">klasa</span>
				</h2>
				<div className="my-4 grid grid-cols-2 px-4 py-2">
					<div className="col-span-1">
						<div className="my-2 gap-3">
							<h6 className="text-xs text-neutral-100">Poniedziałek</h6>
						</div>
						<p className="text-lg font-semibold text-neutral-100">{content}</p>
					</div>
					<div className="col-span-1">
						<div className="my-2 gap-3">
							<h6 className="text-xs text-neutral-100">Środa</h6>
						</div>
						<p className="text-lg font-semibold text-neutral-100">{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
