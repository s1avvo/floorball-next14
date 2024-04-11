"use server";
import { Resend } from "resend";
import { z } from "zod";
import { FloorballEmailTemplate } from "@ui/EmailTemplate";
import { executeGraphql } from "@/api/graphqlApi";
import { ArticleGetListWithPaginationDocument } from "@/gql/graphql";

const contactFormDataSchema = z.object({
	name: z.string().trim().min(2, { message: "Imię musimi być dłuższe niź 2 znak." }),
	surname: z.string().trim().min(2, { message: "Nazwisko musimi być dłuższe niź 2 znak." }),
	email: z.string().trim().email({ message: "Proszę podać poprawny adres email." }),
	phone: z
		.string()
		.trim()
		.optional()
		.transform((e) => (e === "" ? undefined : e))
		.refine(
			(phone) => {
				if (phone) {
					const sections = phone.split("-");
					if (
						sections.length !== 3 ||
						sections[0].length !== 3 ||
						sections[1].length !== 3 ||
						sections[2].length !== 3
					) {
						return false;
					}
					return true;
				}
				return true;
			},
			{ message: "Proszę podać telefon w formacie xxx-xxx-xxx" },
		),

	subject: z
		.string()
		.trim()
		.min(1, { message: "Temat wiadomości musi być dłuższy niż 1 znak." })
		.max(100, { message: "Temat wiadomości musi być krótszy niż 100 znaków." }),
	message: z.string().trim().min(1, { message: "Proszę wpisać treść wiadomości." }),
});

export async function sendMessageAction(formData: FormData) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const result = contactFormDataSchema.safeParse(Object.fromEntries(formData));

	console.log(result);

	if (result.success) {
		const { name, surname, email, phone, subject, message } = result.data;
		const fullName = `${name} ${surname}`;

		try {
			const { data, error } = await resend.emails.send({
				from: "Floorballsrem.com <no-reply@floorballsrem.com>",
				to: [`${process.env.EMAIL_TO}`],
				subject: `Wiadomość od: ${fullName} <${email}>`,
				text: `Imię i nazwisko: ${fullName}\nEmail: ${email}\nTelefon: ${phone}\nTemat: ${subject}\nWiadomość: ${message}`,
				react: FloorballEmailTemplate({ name: fullName, phone, email, subject, message }),
				reply_to: `${email}`,
			});

			if (!data) {
				return { success: false, error };
			}

			return { success: true };
		} catch (error) {
			return { success: false, error };
		}
	}
	return { success: false, error: result.error.errors[0]?.message };
}

export const getNewsAction = async (first: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ArticleGetListWithPaginationDocument,
		variables: { first, skip },
	});

	return graphqlResponse.allArticles;
};
