"use client";
import React, { useRef } from "react";
import { SubmitFormButton } from "@/components/atoms/SubmitFormButton";
import { createNewsAction } from "@/app/actions";

export default function Admin() {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<section className="relative mt-8 flex h-full min-h-screen w-full flex-col items-center justify-center px-2 xl:px-48">
			<div className="w-96">
				<form
					ref={ref}
					action={async (formData) => {
						await createNewsAction(formData);
						ref.current?.reset();
					}}
				>
					<label htmlFor="title">Tytuł</label>
					<input
						className="mb-2 h-9 w-full rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
						type="text"
						name="title"
						id="title"
						maxLength={5}
						required
					/>
					<label htmlFor="first_paragraph">Paragraf - pierwszy</label>
					<textarea
						className="w-full rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
						name="first_paragraph"
						id="first_paragraph"
						placeholder="Dodaj pierwszy paragraf"
						rows={6}
						maxLength={500}
						required
					/>
					<label htmlFor="second_paragraph">Paragraf - drugi</label>
					<textarea
						className="w-full rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
						name="second_paragraph"
						id="second_paragraph"
						placeholder="Dodaj drugi paragraf (opcjonalnie)"
						maxLength={500}
						rows={6}
					/>
					<label htmlFor="link">Link do facebook</label>
					<input
						className="mb-4 h-9 w-full rounded-md border border-blue-950 bg-white p-2 text-blue-900 focus:border-cyan-500 focus:outline-none"
						type="url"
						name="link"
						id="link"
						required
					/>
					<SubmitFormButton label={"DODAJ POST	"} />
				</form>
			</div>
		</section>
	);
}
