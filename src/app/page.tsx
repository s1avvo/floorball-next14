import { AboutUs } from "@/components/organisms/AboutUs";
import { Training } from "@/components/organisms/Training";
import { News } from "@/components/organisms/News";
import { Contact } from "@/components/organisms/Contact";
export default function Home() {
	return (
		<>
			<AboutUs />
			<Training />
			<News />
			<Contact />
		</>
	);
}
