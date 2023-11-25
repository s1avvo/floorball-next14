import { ThemeImage } from "@/components/atoms/ThemeImage";
import { type Trening } from "@/constants/trening";

type TreningCardProps = {
	className: string;
	imageHeight: string;
	trening: Trening;
};
export const TreningCard = ({ className, imageHeight, trening }: TreningCardProps) => {
	const { title, content1, content2, content3, image } = trening || {};

	return (
		<div className={className}>
			<div className="basis-full">
				<div className={`relative mb-2 w-auto ${imageHeight}`}>
					<ThemeImage
						fill
						alt="img"
						srcLight={image.light}
						srcDark={image.dark}
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
				<h2 className="z-10 px-4 py-2 text-6xl font-bold">
					{title} <span className="text-2xl font-light">klasa</span>
				</h2>
				<div className="my-4 grid grid-cols-2 px-4 py-2">
					<div className="col-span-1">
						<div className="my-2 gap-3">
							<h6 className="text-xs">Poniedziałek</h6>
						</div>
						<p className="text-lg font-semibold">{content1}</p>
					</div>
					<div className="col-span-1">
						<div className="my-2 gap-3">
							<h6 className="text-xs">Środa</h6>
						</div>
						<p className="text-lg font-semibold">{content2}</p>
					</div>
					{content3 && (
						<div className="col-span-1">
							<div className="my-2 gap-3">
								<h6 className="text-xs">Piątek</h6>
							</div>
							<p className="text-lg font-semibold">{content3}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
