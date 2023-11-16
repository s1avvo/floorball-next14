import NextImage from "next/image";

type FooterPersonCardProps = {
	src: string;
	name: string;
	phone: string;
	email: string;
};
export const FooterPersonCard = ({ src, name, phone, email }: FooterPersonCardProps) => {
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
					className="aspect-square rounded-full border-4 border-blue-950"
				/>
				<div className="prose-sm flex flex-col">
					<h3>{name}</h3>
					<span className="whitespace-nowrap">{phone}</span>
					<span>{email}</span>
				</div>
			</div>
		</div>
	);
};
