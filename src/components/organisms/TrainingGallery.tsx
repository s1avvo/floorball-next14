import { TrainingGallerySwiper } from "@ui/TrainingGallerySwiper";
import { getGalleryImageList } from "@/api/getGalleryImage";

export const TrainingGallery = async () => {
	const trainingGallery = await getGalleryImageList();

	return (
		<>
			{trainingGallery[0].gallery.length > 0 && (
				<aside className="mb-8" data-aos="fade">
					<div className="mx-auto mt-12 max-w-lg p-4">
						<h4 className="mb-8 text-center text-2xl text-secondary">Zdjęcia z treningu</h4>
						<p className="mb-8 text-center text-base text-cardparagraph">
							Zapoznaj się z galerią zdjęć z naszych treningów. Odkryj atmosferę naszego klubu i dołącz do naszego
							niezwykłego świata unihokeja!
						</p>
					</div>
					<TrainingGallerySwiper images={trainingGallery[0].gallery} />
				</aside>
			)}
		</>
	);
};
