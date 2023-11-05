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
			<h2 className="mb-5 whitespace-nowrap px-6 text-4xl xl:px-14">
				dzieci<span className="font-extrabold "> klas</span>
			</h2>
			<div className="whitespace-nowrap px-6 text-6xl font-extrabold xl:px-14">{age}</div>
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
			<div className="px-6 text-lg text-blue-950 xl:px-14">
				<p>Poniedziałek</p>
				<p>{text1}</p>
				<p>Środa</p>
				<p>{text2}</p>
			</div>
		</div>
	);
};
