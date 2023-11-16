import { DocumentIcon } from "@heroicons/react/24/solid";
import { FooterPersonCard } from "@/components/atoms/FooterPersonCard";

export const Footer = () => {
	return (
		<footer id="footer">
			<div className="bg-primary relative py-8 text-white sm:px-4 md:px-10 xl:px-48">
				<span className="bg-secondary absolute -top-5 ms-2 rounded-md px-4 py-2 sm:ms-0">
					<h3>Trenerzy:</h3>
				</span>
				<div className="justify-between sm:flex">
					<FooterPersonCard
						src={"/assets/trener1.jpg"}
						name={"Arkadiusz Nadolny"}
						phone={"tel: 000 000 000"}
						email={"arkadiusz@wp.pl"}
					/>
					<FooterPersonCard
						src={"/assets/trener1.jpg"}
						name={"Arkadiusz Nadolny"}
						phone={"tel: 000 000 000"}
						email={"arkadiusz@wp.pl"}
					/>
					<FooterPersonCard
						src={"/assets/trener1.jpg"}
						name={"Arkadiusz Nadolny"}
						phone={"tel: 000 000 000"}
						email={"arkadiusz@wp.pl"}
					/>
				</div>
			</div>
			<hr className="dark:border-dark border-2 border-white" />
			<div className="bg-primary flex w-full items-center justify-between px-2 py-2 text-center font-light text-white sm:px-4 md:px-10 xl:px-48">
				<p>Floorball Śrem &copy;2023</p>

				<span className="flex justify-end gap-2">
					Do pobrania
					<DocumentIcon height={24} width={24} />
				</span>
			</div>
		</footer>
	);
};
