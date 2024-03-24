"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "./CustomButton";

export const BackButton = () => {
	const router = useRouter();

	return (
		<CustomButton size="small" onClick={() => router.back()}>
			#Wróć
		</CustomButton>
	);
};
