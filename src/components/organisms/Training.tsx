import { TreningCard } from "@/components/atoms/TreningCard";
import { trening } from "@/constants/trening";

export const Training = () => {
	return (
		<section
			className="relative flex h-full min-h-screen w-full flex-col justify-between gap-3 bg-blue-950 px-4 sm:px-10 xl:px-48"
			id="trening"
		>
			<div className="mt-16 flex-wrap justify-between gap-8 sm:flex">
				<div className="basis-2/3 text-end">
					<span className="text-3xl text-neutral-100 sm:text-5xl">zapraszamy na </span>
					<h2 className="text-6xl font-semibold text-neutral-100 sm:text-9xl">TRENINGI</h2>
				</div>
			</div>

			<div className="justify-between gap-4 sm:flex xl:gap-8">
				<TreningCard
					imageHeight="h-80"
					className="mb-4 basis-1/3 rounded-md bg-amber-400"
					trening={trening[0]}
				/>
				<TreningCard
					imageHeight="h-80"
					className="basis-1/3 rounded-t-md bg-amber-400"
					trening={trening[1]}
				/>

				<div className="basis-1/3 self-end">
					<div className="mb-4">
						<h2 className="mb-5 text-6xl font-extrabold text-cyan-200">
							Hala <br />
							Sportowa
						</h2>
						<p className="text-lg text-cyan-200">Śremie, ul. Staszica 1a</p>
					</div>
					<div className="h-52 basis-full rounded-t-md bg-amber-400 px-4 py-2">
						<h2 className="mb-4 text-5xl font-extrabold text-neutral-100">
							Młodzież <br />i dorośli
						</h2>
						<div className="my-2 gap-3">
							<h6 className="text-xs text-blue-950">Niedziela</h6>
						</div>
						<p className="text-lg font-semibold text-blue-950">10.00 - 12.00</p>
					</div>
				</div>
			</div>
		</section>
	);
};
