import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { type RootLayoutProps } from "@/types/routes/types";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/views/Navbar";

const fontManrope = Manrope({
	subsets: ["latin", "latin-ext"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-manrope",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen font-manrope antialiased", fontManrope.variable)}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme={"system"}
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
