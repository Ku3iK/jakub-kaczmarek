import { ThemeModeToggle } from "@/components/containers/ThemeSwitcher";
import { MailToMe } from "@/components/views/Navbar/partials/MailToMe";
import { CheckOutCv } from "@/components/views/Navbar/partials/CheckOutCv";
import { SiteBranding } from "@/components/views/SiteBranding";
import { Navigation } from "@/components/views/Navbar/partials/Navigation";

export const Navbar = () => {
	return (
		<header className={"section-container flex min-h-16 items-center justify-between py-4"}>
			<SiteBranding />
			<div className={"flex items-center gap-6"}>
				<Navigation />
				<div className={"flex items-center gap-3"}>
					<CheckOutCv />
					<MailToMe />
					<ThemeModeToggle />
				</div>
			</div>
		</header>
	);
};
