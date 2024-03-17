"use client";
import React, { useState, type ChangeEvent } from "react";
import { phoneNumberAutoFormat } from "@/lib/phoneNumberAutoFormat";

interface ContactFormPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	placeholder: string;
	gridColumn?: string;
}

export const ContactFormPhoneInput = ({
	name,
	label,
	placeholder,
	gridColumn,
	...rest
}: ContactFormPhoneInputProps) => {
	const [value, setValue] = useState<string>("");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = phoneNumberAutoFormat(e.target.value);
		setValue(targetValue);
	};

	return (
		<div className={gridColumn}>
			<label htmlFor={`${name}-id`} className="text-base text-black">
				{label}
			</label>
			<input
				className="h-10 w-full rounded-md border border-paragraph bg-[#f7f7f7] p-2 font-light text-secondary focus:border-accent focus:outline-none dark:bg-[#26282e] dark:text-heading"
				type="tel"
				name={name}
				placeholder={placeholder}
				id={`${name}-id`}
				maxLength={11}
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	);
};
