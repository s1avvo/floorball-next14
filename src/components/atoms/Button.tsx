import { Ball } from "@/components/atoms/Ball";

type AboutUsLinkButtonProps = {
	label: string;
};
export const Button = ({ label }: AboutUsLinkButtonProps) => {
	return (
		<button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-amber-400 px-8 text-lg text-neutral-100">
			{label}
			<Ball fill={"#FFF"} width={40} height={40} />
		</button>
	);
};
