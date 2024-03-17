export const ContactTrainerCard = ({ name, phone }: { name: string; phone: string }) => {
	const firstName = name.split(" ")[0];
	const surName = name.split(" ")[1];

	return (
		<>
			<h6 className="mb-4 text-lg text-black">
				{firstName} <br /> {surName}
			</h6>
			<div className="inline-flex items-center gap-2">
				<svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="14.5" cy="14.5" r="14.5" fill="#FF8906" />
					<path
						d="M9.62 13.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V23c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
						fill="#FFFFFE"
					/>
				</svg>
				<span className="text-base text-paragraph">{phone}</span>
			</div>
		</>
	);
};
