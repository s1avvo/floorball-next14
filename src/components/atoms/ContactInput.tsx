import React from "react";

type ContactInputProps = {
	label: string;
	type: React.HTMLInputTypeAttribute;
	name: string;
	gridColumn?: string;
};
export const ContactInput = ({ label, type, name, gridColumn }: ContactInputProps) => {
	return (
		<div className={gridColumn}>
			<label
				htmlFor={`${name}-id`}
				className="mb-1 ms-2 block text-sm font-medium text-neutral-100"
			>
				{label}
			</label>
			<input
				className="h-9 w-full rounded-md border border-neutral-400 p-2"
				type={type}
				name={name}
				id={`${name}-id`}
				required
			/>
		</div>
	);
};
