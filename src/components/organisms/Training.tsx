import { TreningModule } from "@/components/atoms/TreningModule";
import { TreningModuleWithoutImage } from "@/components/atoms/TreningModuleWithoutImage";

export const Training = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col bg-blue-950" id="trening">
			<div className="flex h-full min-h-screen w-full flex-col justify-between px-10 pt-28 sm:px-20 xl:px-48">
				<div className="mb-16 ps-40 text-3xl font-semibold text-neutral-100 sm:ps-20 sm:text-5xl xl:ps-56 xl:text-8xl">
					TRENINGI
				</div>
				<div className="flex h-3/4 w-full flex-wrap">
					<div className="mt-5 h-[450px] min-w-[300px] basis-1/3 self-start px-4 xl:pb-5">
						<div className="h-full w-full rounded-md bg-amber-400">
							<TreningModule
								age={"1 | 2"}
								src={"/unihokphoto1.webp"}
								text1={"godz. 17:30 - 18:30"}
								text2={"godz. 17:30 - 18:30"}
							/>
						</div>
					</div>
					<div className="mt-5 h-[450px] min-w-[300px] basis-1/3 self-end px-4">
						<div className="h-full w-full rounded-b-md rounded-t-md bg-amber-400 xl:rounded-b-none ">
							<TreningModule
								age={"3 | 4 | 5"}
								src={"/unihokphoto1.webp"}
								text1={"godz. 16:30 - 17:30"}
								text2={"godz. 16:30 - 17:30"}
							/>
						</div>
					</div>
					<div className="mt-5 flex min-w-[300px] basis-1/3 flex-col gap-5 self-end px-4">
						<TreningModuleWithoutImage text1={"Niedziela"} text2={"godz. 10:00 - 12:00"} />
					</div>
				</div>
			</div>
		</section>
	);
};
