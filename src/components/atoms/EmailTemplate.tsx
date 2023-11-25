export const EmailTemplate = ({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) => {
	return (
		<div>
			<h1>
				Wiadomość od {name} - {email}
			</h1>
			<p>Treść: {message}</p>
		</div>
	);
};
