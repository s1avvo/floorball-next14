"use server";
import type React from "react";
import { renderAsync } from "@react-email/render";
import { Resend } from "resend";
import { FloorballEmailTemplate } from "@/components/atoms/EmailTemplate";

export const sendMessageAction = async (formData: FormData) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	const name = String(formData.get("name"));
	const email = String(formData.get("email"));
	const subject = String(formData.get("subject"));
	const message = String(formData.get("message"));

	const html = await renderAsync(FloorballEmailTemplate({ name, email, subject, message }) as React.ReactElement);

	const { data } = await resend.emails.send({
		from: "Floorballsrem.com <no-reply@floorballsrem.com>",
		to: ["arkadiusz.nadolny@gmail.com"],
		subject: subject,
		html: html,
	});

	return data;
};
