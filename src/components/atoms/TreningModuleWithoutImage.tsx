type TreningModuleType = {
	text1: string;
	text2: string;
};
export const TreningModuleWithoutImage = ({ text1, text2 }: TreningModuleType) => {
	return (
		<>
			<div className="text-neutral-100">
				<h2 className="mb-5 text-5xl font-extrabold">Hala Sportowa</h2>
				<p className="text-lg">ul. Staszica 1a</p>
				<p className="text-lg">w Śremie</p>
			</div>
			<div className="h-48 w-full rounded-t-md bg-cyan-200 px-14 py-2">
				<h2 className="mb-5 text-5xl font-extrabold text-blue-950">Młodzież i dorośli</h2>
				<p className="text-lg">{text1}</p>
				<p className="text-lg">{text2}</p>
			</div>
		</>
	);
};
