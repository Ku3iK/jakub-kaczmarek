import { ThemeModeToggle } from "@/components/containers/ThemeSwitcher";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Jakub Kaczmarek</h1>
			<ThemeModeToggle />
		</main>
	);
}
