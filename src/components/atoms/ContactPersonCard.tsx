import NextImage from "next/image";

type FooterPersonCardProps = {
	src: string;
	name: string;
};
export const ContactPersonCard = ({ src, name }: FooterPersonCardProps) => {
	return (
		<div className="mt-4 basis-1/3">
			<div className="float-none flex items-center justify-center gap-3">
				<NextImage
					alt="img"
					src={src}
					width={80}
					height={80}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					className="aspect-square rounded-full border-4 border-secondary"
				/>
				<div className="prose-sm flex flex-col text-blue-950 dark:text-white">
					<h3>{name}</h3>
				</div>
			</div>
		</div>
	);
};
