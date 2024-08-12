import Link from "next/link";
import { FileDown } from "lucide-react";
import { LucideIconWithText } from "@ui/LucideIconWithText";

import { getDocumentList } from "@/api/getDocument";

export const Documents = async () => {
	const documents = await getDocumentList();

	if (!documents || documents.length === 0) {
		return;
	}

	return (
		<ul className="items-center justify-center gap-12 whitespace-nowrap text-base text-secondary sm:flex">
			{documents.map(({ id, title, document }) => (
				<li key={id} className="flex items-center justify-center gap-2">
					<Link href={`${document.url}`} download target="_blank" rel="noopener noreferrer">
						<LucideIconWithText Icon={FileDown} size={24} style="text-accent">
							{title}
						</LucideIconWithText>
					</Link>
				</li>
			))}
		</ul>
	);
};
