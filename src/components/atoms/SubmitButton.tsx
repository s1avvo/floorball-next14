"use client";
import { useFormStatus } from "react-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

type SubmitButtonProps = {
	label: string;
};
export const SubmitButton = ({ label }: SubmitButtonProps) => {
	const formStatus = useFormStatus();
	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="flex justify-between gap-5 rounded-md bg-amber-400 px-6 py-3 text-lg text-neutral-100 disabled:cursor-wait disabled:bg-amber-500"
		>
			{label}
			<PencilSquareIcon height={24} width={24} />
		</button>
	);
};
