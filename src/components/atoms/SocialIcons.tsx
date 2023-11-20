import NextImage from "next/image";
import Link from "next/link";
export const SocialIcons = () => {
	return (
		<>
			<li>
				<Link
					href={"https://www.facebook.com/floorballsrem"}
					rel="noopener noreferrer"
					target="_blank"
				>
					<NextImage src={"/assets/facebook.svg"} alt={"facebook"} width={24} height={24} />
				</Link>
			</li>
			<li>
				<Link
					href={"https://www.instagram.com/floorballsrem/?igshid=MTNiYzNiMzkwZA%3D%3D"}
					rel="noopener noreferrer"
					target="_blank"
				>
					<NextImage src={"/assets/instagram.svg"} alt={"instagram"} width={24} height={24} />
				</Link>
			</li>
			<li>
				<Link
					href={"https://www.tiktok.com/@floorballsrem?_t=8hUrUrNT8PA&_r=1"}
					rel="noopener noreferrer"
					target="_blank"
				>
					<NextImage src={"/assets/tiktok.svg"} alt={"tiktok"} width={24} height={24} />
				</Link>
			</li>
		</>
	);
};
