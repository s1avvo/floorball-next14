import Link from "next/link";
import { Stick } from "@ui/Stick";
import { BackButton } from "@ui/BackButton";
import { CustomButton } from "@ui/CustomButton";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div
				className="hidden flex-col items-end justify-between gap-8 rounded-xl bg-primary p-4 sm:p-8 lg:flex"
				data-aos="fade-right"
				data-aos-id-news
			>
				<div className="text-end">
					<h2 className="mb-8 text-4xl text-heading">
						Co słychać <br />w klubie?
					</h2>
					<p className="mb-4 text-base text-paragraph">
						Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
						wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
					</p>
					<div className="flex items-center justify-end gap-2">
						<Link href={"/"}>
							<CustomButton size="small">#Home</CustomButton>
						</Link>
						<BackButton />
					</div>
				</div>
				<Stick fill="#FF8906" height={550} width={160} />
			</div>
			{children}
		</div>
	);
}
