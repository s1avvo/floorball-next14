type FloorballEmailTemplateProps = {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
};

export const FloorballEmailTemplate = ({ name, email, phone, subject, message }: FloorballEmailTemplateProps) => {
	return (
		<section className="my-10 flex w-3/4 max-w-xl flex-col items-center justify-center rounded-md bg-cardbackground px-6 py-8 shadow-sm drop-shadow-sm">
			<header className="self-start">
				<a href="https://floorballsrem.com/" target="_blank" rel="noopener noreferrer">
					<img src={`${process.env.LOGO_LIGHT_URL}`} width={262} height={50} alt="Floorball Śrem Logo" />
				</a>
			</header>

			<main className="mt-8">
				<p className="mt-2 text-base leading-loose text-paragraph">Od: {`${name} <${email}>`}</p>
				<h2 className="text-4xl text-secondary">{subject}</h2>

				<p className="mt-2 text-base font-light leading-loose text-paragraph">{message}</p>

				<p className="mt-8 text-base text-paragraph">
					{name}
					<br />
					{phone && (
						<>
							tel: {phone} <br />
						</>
					)}
					email: {email}
					<br />
				</p>
			</main>

			<footer className="mt-8">
				<p className="text-sm text-paragraph">
					Wiadomość została wysłana ze strony{" "}
					<a href="https://floorballsrem.com/" className="text-accent" target="_blank" rel="noreferrer">
						floorballsrem.com
					</a>
					<span className="mt-3 text-paragraph">© {new Date().getFullYear()} Floorball Śrem</span>
				</p>
			</footer>
		</section>
	);
};
