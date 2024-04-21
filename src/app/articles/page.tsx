import type { Metadata } from "next";
import { Articles } from "@/components/views/Articles";

export const metadata: Metadata = {
	title: "Jakub Kaczmarek | Frontend Developer - articles",
};

export default function ArticlesPage() {
	return (
		<main className="section-container w-full py-20">
			<Articles />
		</main>
	);
}
