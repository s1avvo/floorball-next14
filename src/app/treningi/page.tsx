import { Image as DatoImage } from "react-datocms";
import { TreningCard } from "@ui/TreningCard";
import { TreningGallerySwiper } from "@ui/TreningGallerySwiper";

import { getTreningSessionsList } from "@api/getTrening";
import { getPageImagesList } from "@api/getPageImage";

export default async function TreningMain() {
	const treningSessions = await getTreningSessionsList();
	const treningImages = await getPageImagesList("Treningi");

	return (
		<div className="space-y-12 p-4 sm:p-8">
			<section className="space-y-16">
				<div className="flex-row-reverse gap-10 md:flex">
					<div className="relative h-64 w-full self-end overflow-hidden rounded-xl shadow-lg md:h-96 md:w-1/2">
						<DatoImage
							data={treningImages[0].headerImage.responsiveImage!}
							layout="responsive"
							objectFit="cover"
							priority
							style={{
								height: "100%",
							}}
						/>
						<small className="text-cardparagraph bg-cardbackground/10 absolute bottom-2 right-2 px-2 text-sm backdrop-blur-sm">
							Photo by{" "}
							<a href="https://unsplash.com/@familyschaffner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
								Astrid Schaffner
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/photos/a-basket-with-eggs-and-a-ball-v48GB3ArQ90?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
								Unsplash
							</a>
						</small>
					</div>

					<div className="mt-8 sm:mt-0 md:w-1/2">
						<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl">
							Harmonogram treningów dla najmłodszych
						</h1>
						<p className="text-cardparagraph prose mb-8 text-base">
							Zapraszamy do udziału w naszych treningach, które odbywają się regularnie w Hali Sportowej w Śremie, przy
							ul. Staszica 1a. Sprawdź poniższy harmonogram treningów dla różnych grup wiekowych:
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
					{treningSessions.map((item) => (
						<TreningCard key={item.id} trening={item} />
					))}
				</div>
			</section>

			{treningImages[0].gallery.length > 0 && (
				<aside>
					<div className="mx-auto max-w-lg">
						<h4 className="mb-8 text-center text-2xl text-secondary">Zdjęcia z treningu</h4>
						<p className="text-cardparagraph mb-8 text-center text-base">
							Zapoznaj się z galerią zdjęć z naszych treningów. Odkryj atmosferę naszego klubu i dołącz do naszego
							niezwykłego świata unihokeja!
						</p>
					</div>
					<TreningGallerySwiper images={treningImages[0].gallery} />
				</aside>
			)}
		</div>
	);
}
