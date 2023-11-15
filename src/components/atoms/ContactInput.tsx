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
			<label htmlFor={`${name}-id`} className="prose-sm ms-2 block">
				{label}
			</label>
			<input
				className="h-9 w-full rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
				type={type}
				name={name}
				id={`${name}-id`}
				required
			/>
		</div>
	);
};
