import { TrainingCard } from "@ui/TrainingCard";
import { getTrainingSessionsList } from "@/api/getTraining";

export const TrainingList = async () => {
	const trainingSessions = await getTrainingSessionsList();

	return (
		<div className="mt-8 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
			{trainingSessions.map((item, index) => (
				<TrainingCard key={item.id} training={item} delay={`${(index + 1) * 200}`} />
			))}
		</div>
	);
};
