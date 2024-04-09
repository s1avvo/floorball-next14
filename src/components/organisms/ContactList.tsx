import { ContactTrainerCard } from "@ui/ContactTrainerCard";
import { getTrainersList } from "@/api/getTrainer";

export const ContactList = async () => {
	const trainers = await getTrainersList();

	return (
		<ul className="flex flex-wrap justify-between">
			{trainers.map((item) => (
				<li key={item.id} className="mb-2 border-s-2 border-accent px-4 sm:mx-auto">
					<ContactTrainerCard name={item.name} phone={item.phoneNumber} />
				</li>
			))}
		</ul>
	);
};
