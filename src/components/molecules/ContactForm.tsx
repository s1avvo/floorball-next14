"use client";
import { useRef } from "react";
import { ContactInput } from "@/components/atoms/ContactInput";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { sendMessageAction } from "@/app/actions";

export const ContactForm = () => {
	const ref = useRef<HTMLFormElement>(null);

	async function sendMessage(formData: FormData) {
		await sendMessageAction(formData);
		ref.current?.reset();
	}

	return (
		<form ref={ref} action={sendMessage}>
			<div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
				<ContactInput
					label={"Imię i nazwisko"}
					type={"text"}
					name={"name"}
					gridColumn={"col-span-2"}
				/>
				<ContactInput label={"Email"} type={"email"} name={"email"} gridColumn={"col-span-2"} />
				<ContactInput label={"Temat"} type={"text"} name={"subject"} gridColumn={"col-span-2"} />
				<div className="col-span-2 grid">
					<label htmlFor="message" className="prose-sm ms-2 block font-light">
						Wiadomość
					</label>
					<textarea
						className="rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
						name="message"
						id="message-id"
						placeholder="Napisz wiadomość.."
						rows={5}
						required
					/>
				</div>
				<div className="col-span-2 mt-4 grid">
					<SubmitButton label={"WYŚLIJ WIADOMOŚĆ"} />
				</div>
			</div>
		</form>
	);
};
