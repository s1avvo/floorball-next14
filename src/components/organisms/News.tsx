export const News = () => {
	return (
		<section className="relative flex h-full min-h-screen w-full flex-col bg-white" id="news">
			{/*Trening bottom*/}
			<div className="absolute left-0 top-0 hidden w-full px-10 sm:px-20 xl:flex xl:px-48">
				<div className="min-w-[300px] basis-1/3 self-start px-4 xl:pb-5"></div>
				<div className="h-[75px] min-w-[300px] basis-1/3 self-end px-4">
					<div className="h-full w-full rounded-b-md bg-amber-400"></div>
				</div>
				<div className="flex min-w-[300px] basis-1/3 flex-col gap-5 self-end px-4"></div>
			</div>

			<div className="flex h-full min-h-screen w-full flex-col px-10 pt-28 sm:px-20 xl:px-48">
				<div className="mb-16 ps-40 text-3xl font-semibold text-blue-950 sm:ps-20 sm:text-5xl xl:ps-56 xl:text-8xl">
					AKTUALNOŚCI
				</div>
			</div>
		</section>
	);
};
