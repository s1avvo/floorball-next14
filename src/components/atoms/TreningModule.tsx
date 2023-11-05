import NextImage from "next/image";

type TreningModuleType = {
	age: string;
	src: string;
	text1: string;
	text2: string;
};
export const TreningModule = ({ age, src, text1, text2 }: TreningModuleType) => {
	return (
		<div className="h-48 w-full py-2 text-neutral-100">
			<h2 className="mb-5 px-14 text-4xl">
				dzieci<span className="font-extrabold "> klas</span>
			</h2>
			<div className="px-14 text-6xl font-extrabold">{age}</div>
			<div className="relative my-3 aspect-square h-40 w-full bg-cyan-200">
				<NextImage
					src={src}
					fill
					alt="Trenineg image"
					priority
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						overflow: "hidden",
						objectPosition: "center",
					}}
				/>
			</div>
			<div className="px-14 text-lg text-blue-950">
				<p>Poniedziałek</p>
				<p>{text1}</p>
				<p>Środa</p>
				<p>{text2}</p>
			</div>
		</div>
	);
};
