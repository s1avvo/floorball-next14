import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/atoms/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailSendRequest = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export async function POST(request: NextRequest) {
	const { name, email, subject, message } = (await request.json()) as EmailSendRequest;
	try {
		const data = await resend.emails.send({
			from: "Floorballsrem.com <s.nadolny83@gmail.com>",
			to: ["s.nadolny83@gmail.com", `${email}`],
			subject: `Floorballsrem.com wiadomość od ${name} (email: ${email})`,
			react: EmailTemplate({ name, subject, message }),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
