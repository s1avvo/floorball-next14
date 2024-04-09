"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "../atoms/CustomButton";

export const NewsBackButton = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();

	return (
		<CustomButton size="small" onClick={() => router.back()}>
			{children}
		</CustomButton>
	);
};
