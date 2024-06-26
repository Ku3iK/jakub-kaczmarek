import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { type RootLayoutProps } from "@/types/routes/types";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/views/Navbar";
import { Footer } from "@/components/views/Footer";

const fontManrope = Manrope({
	subsets: ["latin", "latin-ext"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-manrope",
});

export const metadata: Metadata = {
	title: "Jakub Kaczmarek | Frontend Developer",
	description:
		"I'm a Frontend Developer specializing in TypeScript, React.js, and Next.js. I'm focusing on further development in frontend technologies and directing my career path towards Fullstack Development.",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn("min-h-screen text-balance font-manrope antialiased", fontManrope.variable)}
			>
				<ThemeProvider
					attribute={"class"}
					defaultTheme={"system"}
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
