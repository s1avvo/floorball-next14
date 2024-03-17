import React from "react";

interface ContactInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: React.HTMLInputTypeAttribute;
	label: string;
	name: string;
	placeholder: string;
	gridColumn?: string;
}

export const ContactFormInput = ({ type, name, label, placeholder, gridColumn, ...rest }: ContactInputProps) => {
	return (
		<div className={gridColumn}>
			<label htmlFor={`${name}-id`} className="text-base text-black">
				{label}
			</label>
			<input
				className="h-10 w-full rounded-md border border-paragraph bg-[#f7f7f7] p-2 font-light text-secondary focus:border-accent focus:outline-none dark:bg-[#26282e] dark:text-heading"
				type={type}
				name={name}
				placeholder={placeholder}
				id={`${name}-id`}
				required
				{...rest}
			/>
		</div>
	);
};
