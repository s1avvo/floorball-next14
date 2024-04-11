"use client";
import React, { useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ContactFormInput } from "@ui/ContactFormInput";
import { ContactFormButton } from "@ui/ContactFormButton";
import { phoneNumberAutoFormat } from "@/utils";

import { sendMessageAction } from "@/actions";

export const ContactForm = () => {
	const ref = useRef<HTMLFormElement>(null);
	const [phoneInputValue, setPhoneInputValue] = useState<string>("");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = phoneNumberAutoFormat(e.target.value);
		setPhoneInputValue(targetValue);
	};

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

			ref.current?.reset();
			setPhoneInputValue("");

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
					autoComplete="given-name"
					required
				/>
				<ContactFormInput
					label="Nazwisko"
					placeholder={"Wpisz swoje nazwisko.."}
					type={"text"}
					name={"surname"}
					gridColumn={"col-span-2 sm:col-span-1"}
					autoComplete="family-name"
					required
				/>
				<ContactFormInput
					label="Email"
					placeholder={"Wpisz prawidłowy email.."}
					type={"email"}
					name={"email"}
					gridColumn={"col-span-2 sm:col-span-1"}
					autoComplete="email"
					required
				/>
				<ContactFormInput
					label="Telefon (Opcjonalnie)"
					placeholder={"Wpisz telefon bez prefiksu.."}
					type={"tel"}
					name={"phone"}
					gridColumn={"col-span-2 sm:col-span-1"}
					maxLength={11}
					value={phoneInputValue}
					onChange={onChange}
					autoComplete="off"
				/>
				<ContactFormInput
					label="Temat"
					placeholder={"Wpisze temat wiadomości.."}
					type={"text"}
					name={"subject"}
					gridColumn={"col-span-2"}
					required
				/>
				<div className="col-span-2 grid">
					<label htmlFor="message-id" className="text-base text-cardparagraph">
						Wiadomość
					</label>
					<textarea
						className="rounded-md border border-paragraph bg-[#f7f7f7]  p-2 font-light text-secondary focus:border-accent focus:outline-none dark:bg-[#191332]"
						name="message"
						id="message-id"
						placeholder="Napisz wiadomość.."
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
