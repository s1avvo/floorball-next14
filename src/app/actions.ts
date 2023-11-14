"use server";
export const sendMessageAction = async (formData: FormData) => {
	const messageForm = {
		name: String(formData.get("name")),
		email: String(formData.get("email")),
		subject: String(formData.get("subject")),
		message: String(formData.get("message")),
	};

	await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(messageForm),
		// body: JSON.stringify({
		// 	from: messageForm.email,
		// 	to: "s.nadolny83@gmail.com",
		// 	subject: `Floorballsrem.com wiadomość od ${messageForm.name} temat: ${messageForm.subject}`,
		// 	text: messageForm.message,
		// }),
	});
};
