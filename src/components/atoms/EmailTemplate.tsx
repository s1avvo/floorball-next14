export const EmailTemplate = ({ name, message }: { name: string; message: string }) => {
	return (
		<div>
			<h1>Wiadomość od {name}</h1>
			<p>Treść: {message}</p>
		</div>
	);
};
