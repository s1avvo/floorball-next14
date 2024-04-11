"use client";
import { useFormStatus } from "react-dom";
import { CustomButton } from "@ui/CustomButton";

export const ContactFormButton = () => {
	const { pending } = useFormStatus();

	return (
		<CustomButton size="small" type="submit" aria-disabled={pending}>
			Wyślij wiadomość
		</CustomButton>
	);
};
