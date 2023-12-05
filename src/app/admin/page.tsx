import { CreateNewsForm } from "@/components/molecules/CreateNewsForm";

export default function Admin() {
	return (
		<section className="relative mt-8 flex h-full min-h-screen w-full flex-col items-center justify-center px-2 xl:px-48">
			<div className="w-96">
				<CreateNewsForm />
			</div>
		</section>
	);
}
