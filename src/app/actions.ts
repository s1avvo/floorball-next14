"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/atoms/EmailTemplate";

export const sendMessageAction = async (formData: FormData) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	const name = String(formData.get("name"));
	const email = String(formData.get("email"));
	const subject = String(formData.get("subject"));
	const message = String(formData.get("message"));

	const { data } = await resend.emails.send({
		from: "Floorballsrem.com <myscript@myscripts.pl>",
		to: ["s.nadolny83@gmail.com", `${email}`],
		subject: `Floorballsrem.com - ${subject})`,
		react: EmailTemplate({ name, message }),
	});

	return data;
};
