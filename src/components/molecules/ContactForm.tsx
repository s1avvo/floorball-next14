"use client";
import { useRef } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ContactFormInput } from "@ui/ContactFormInput";
import { ContactFormPhoneInput } from "@ui/ContactFormPhoneInput";
import { ContactFormButton } from "@ui/ContactFormButton";
import { sendMessageAction } from "@/app/kontakt/actions";

export const ContactForm = () => {
	const ref = useRef<HTMLFormElement>(null);

	const handleSendMessageForm = async (formData: FormData) => {
		const result = await sendMessageAction(formData);

		if (result.success) {
			toast.success("Wiadomość wysłana", {
				style: {
					background: "#FF8906",
					color: "white",
				},
				className: "class",
			});

			if (ref.current) {
				ref.current.reset();
				ref.current["phone"].value = "";
			}

			return;
		}

		toast.error(String(result.error), {
			style: {
				background: "red",
				color: "white",
			},
			className: "class",
		});
	};

	return (
		<form action={handleSendMessageForm} ref={ref}>
			<div className="grid grid-cols-2 gap-4 overflow-hidden">
				<ContactFormInput
					label="Imię"
					placeholder={"Wpisz swoje imię.."}
					type={"text"}
					name={"name"}
					gridColumn={"col-span-2 sm:col-span-1"}
				/>
				<ContactFormInput
					label="Nazwisko"
					placeholder={"Wpisz swoje nazwisko.."}
					type={"text"}
					name={"surname"}
					gridColumn={"col-span-2 sm:col-span-1"}
				/>
				<ContactFormInput
					label="Email"
					placeholder={"Wpisz prawidłowy email.."}
					type={"email"}
					name={"email"}
					gridColumn={"col-span-2 sm:col-span-1"}
				/>
				<ContactFormPhoneInput
					label="Telefon (Opcjonalnie)"
					placeholder={"Wpisz numer telefon bez prefixu.."}
					name={"phone"}
					gridColumn={"col-span-2 sm:col-span-1"}
				/>
				<ContactFormInput
					label="Temat"
					placeholder={"Wpisze temat wiadomości.."}
					type={"text"}
					name={"subject"}
					gridColumn={"col-span-2"}
				/>
				<div className="col-span-2 grid">
					<label htmlFor="message-id" className="text-base text-black">
						Wiadomość
					</label>
					<textarea
						className="rounded-md border border-paragraph bg-[#f7f7f7]  p-2 font-light text-secondary focus:border-accent focus:outline-none dark:bg-[#26282e] dark:text-heading"
						name="message"
						id="message-id"
						placeholder="Napisz wiadomość"
						rows={8}
						required
					/>
				</div>
				<div className="col-span-2 flex items-center gap-2">
					<input type="checkbox" required id="policy" name="policy-checkbox" />
					<label htmlFor="policy" className="text-sm font-light">
						Akceptuję{" "}
						<Link
							href={"/polityka-prywatnosci"}
							className="font-normal underline hover:text-secondary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Politykę prywatności
						</Link>
					</label>
				</div>
				<div className="col-span-2 flex justify-end">
					<ContactFormButton />
				</div>
			</div>
		</form>
	);
};
