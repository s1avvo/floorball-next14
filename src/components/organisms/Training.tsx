import { TrainingSection } from "@ui/TrainingSection";
import { getPageImagesList } from "@/api/getPageImage";

export const Training = async () => {
	const trainingImages = await getPageImagesList("Treningi");

	return (
		<section className="flex-row-reverse gap-4 md:flex">
			<TrainingSection
				title={
					<h1 className="mb-8 text-3xl text-secondary drop-shadow-md lg:text-4xl xl:text-5xl" data-aos="fade-up">
						Harmonogram treningów dla najmłodszych
					</h1>
				}
				paragraphs={[
					"Zapraszamy do udziału w naszych treningach, które odbywają się regularnie w Hali Sportowej w Śremie, przy ul. Staszica 1a. Sprawdź poniższy harmonogram treningów dla różnych grup wiekowych:",
				]}
				image={trainingImages[0].headerImage.responsiveImage}
			/>
		</section>
	);
};
