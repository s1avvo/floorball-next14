"use client";
import { useRef } from "react";
import { ContactInput } from "@/components/atoms/ContactInput";
import { SubmitButton } from "@/components/atoms/SubmitButton";
// import { sendMessageAction } from "@/app/actions";

export const ContactForm = () => {
	const ref = useRef<HTMLFormElement>(null);

	// async function sendMessage(formData: FormData) {
	// await sendMessageAction(formData);
	// 	ref.current?.reset();
	// }

	return (
		<form ref={ref} /*action={sendMessage}*/>
			<div className="grid gap-2 md:grid-cols-2">
				<ContactInput label={"Imię"} type={"text"} name={"name"} />
				<ContactInput label={"Nazwisko"} type={"text"} name={"surname"} />
				<ContactInput label={"Email"} type={"email"} name={"email"} />
				<ContactInput label={"Temat"} type={"text"} name={"subject"} gridColumn={"col-span-2"} />
				<div className="col-span-2 grid">
					<label htmlFor="message" className="mb-1 ms-2 block text-sm font-medium text-neutral-100">
						Wiadomość
					</label>
					<textarea
						className=" rounded-md border border-neutral-400 p-2"
						name="message"
						id="message-id"
						placeholder="Napisz wiadomość.."
						rows={5}
						required
					/>
				</div>
				<div className="col-span-2 mt-4 grid">
					<SubmitButton label={"WYŚLIJ"} />
				</div>
			</div>
		</form>
	);
};
