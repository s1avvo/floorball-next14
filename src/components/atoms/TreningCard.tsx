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
			<div className="basis-full rounded-t-md border-t-8 border-amber-400 hover:opacity-80">
				<div className={`relative mb-2 w-auto ${imageHeight}`}>
					1
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
							borderTopLeftRadius: "0.375rem",
							borderTopRightRadius: "0.375rem",
						}}
					/>
					<div className="absolute bottom-0 left-0 p-3">
						<h2 className="z-10 text-6xl font-bold text-white">
							{title} <span className="text-3xl font-semibold">klasa</span>
						</h2>
					</div>
				</div>
			</div>
			<div className="mb-4 grid grid-cols-2 px-4 py-2">
				<div className="col-span-1">
					<div className="my-2 gap-3">
						<h6 className="text-xs text-blue-950">Poniedziałek</h6>
					</div>
					<p className="text-lg font-semibold text-blue-950">{content}</p>
				</div>
				<div className="col-span-1">
					<div className="my-2 gap-3">
						<h6 className="text-xs">Środa</h6>
					</div>
					<p className="text-lg font-semibold text-blue-950">{content}</p>
				</div>
			</div>
		</div>
	);
};
