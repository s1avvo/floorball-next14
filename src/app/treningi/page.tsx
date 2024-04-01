import { Image as DatoImage } from "react-datocms";
import { TrainingCard } from "@/components/atoms/TrainingCard";
import { TrainingGallerySwiper } from "@/components/molecules/TrainingGallerySwiper";
import { trainingStructuredData } from "@/constants/structuredData ";

import { getTrainingSessionsList } from "@/app/api/getTraining";
import { getPageImagesList } from "@api/getPageImage";

export default async function TrainingMain() {
	const trainingSessions = await getTrainingSessionsList();
	const trainingImages = await getPageImagesList("Treningi");

	return (
		<>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingStructuredData) }}
			/>

			<div className="relative">
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-b from-paragraph/15 via-paragraph/5 to-paragraph/0 sm:rounded-xl" />
				<div className="absolute left-0 top-0 h-24 w-full rounded-none bg-gradient-to-l from-background to-background/0 sm:rounded-xl" />

				<section>
					<div className="flex-row-reverse gap-4 md:flex">
						<div className="relative h-64 w-full self-end overflow-hidden rounded-none shadow-lg sm:rounded-xl md:h-96 md:w-1/2">
							<DatoImage
								data={trainingImages[0].headerImage.responsiveImage!}
								layout="responsive"
								objectFit="cover"
								style={{
									height: "100%",
								}}
							/>
							<small className="absolute bottom-2 right-2 bg-cardbackground/10 px-2 text-sm text-cardparagraph backdrop-blur-sm">
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

						<div className="p-8 sm:p-12 md:w-1/2">
							<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl" data-aos="fade-up">
								Harmonogram treningów dla najmłodszych
							</h1>
							<p className="prose text-base text-cardparagraph" data-aos="fade-up" data-aos-delay="200">
								Zapraszamy do udziału w naszych treningach, które odbywają się regularnie w Hali Sportowej w Śremie,
								przy ul. Staszica 1a. Sprawdź poniższy harmonogram treningów dla różnych grup wiekowych:
							</p>
						</div>
					</div>

					<div className="mt-8 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
						{trainingSessions.map((item, index) => (
							<TrainingCard key={item.id} training={item} delay={`${(index + 1) * 200}`} />
						))}
					</div>
				</section>

				{trainingImages[0].gallery.length > 0 && (
					<aside className="mb-8" data-aos="fade">
						<div className="mx-auto mt-12 max-w-lg p-4">
							<h4 className="mb-8 text-center text-2xl text-secondary">Zdjęcia z treningu</h4>
							<p className="mb-8 text-center text-base text-cardparagraph">
								Zapoznaj się z galerią zdjęć z naszych treningów. Odkryj atmosferę naszego klubu i dołącz do naszego
								niezwykłego świata unihokeja!
							</p>
						</div>
						<TrainingGallerySwiper images={trainingImages[0].gallery} />
					</aside>
				)}
			</div>
		</>
	);
}
