import Link from "next/link";
import { Stick } from "@ui/Stick";
import { BackButton } from "@ui/BackButton";
import { CustomButton } from "@ui/CustomButton";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div className="hidden flex-col items-end justify-between gap-8 rounded-xl bg-primary p-4 sm:p-8 lg:flex">
				<div className="text-end">
					<h2 className="mb-12 text-4xl text-heading" data-aos="fade-up">
						Co słychać <br />w klubie?
					</h2>
					<p className="mb-4 text-base text-paragraph" data-aos="fade-up" data-aos-delay="200">
						Śledź naszą stronę oraz media społecznościowe, aby być na bieżąco z najnowszymi informacjami, relacjami z
						wydarzeń klubowych oraz ciekawostkami ze świata unihokeja.
					</p>
					<p className="mb-4 text-base text-paragraph" data-aos="fade-up" data-aos-delay="400">
						Dołącz do naszej społeczności i nie przegap żadnych aktualności, które przygotowujemy specjalnie dla Ciebie!
					</p>
					<div className="flex items-center justify-end gap-2">
						<Link href={"/"}>
							<CustomButton
								size="small"
								data-aos="fade-zoom-in"
								data-aos-delay="1000"
								data-aos-offset="0"
								data-aos-anchor="[data-aos-id-news]"
							>
								#Home
							</CustomButton>
						</Link>
						<div data-aos="fade-zoom-in" data-aos-delay="1200" data-aos-offset="0">
							<BackButton />
						</div>
					</div>
				</div>
				<Stick fill="#FF8906" height={550} width={160} />
			</div>
			{children}
		</div>
	);
}
