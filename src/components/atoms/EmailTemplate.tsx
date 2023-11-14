export const EmailTemplate = ({
	name,
	subject,
	message,
}: {
	name: string;
	subject: string;
	message: string;
}) => {
	return (
		<div>
			<h1>Wiadomość od {name}</h1>
			<h2>Temat: {subject}</h2>
			<p>Treść: {message}</p>
		</div>
	);
};
