"use client";
import { useFormStatus } from "react-dom";
import { Ball } from "@/components/atoms/Ball";

type ContactButtonProps = {
	label: string;
};
export const ContactButton = ({ label }: ContactButtonProps) => {
	const formStatus = useFormStatus();
	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="flex w-full items-center justify-center gap-3 rounded-md bg-amber-400 pe-2 ps-8 text-lg text-neutral-100 disabled:cursor-wait disabled:bg-amber-500"
		>
			{label}
			<Ball fill={"#FFF"} width={40} height={40} />
		</button>
	);
};
