import { ThemeModeToggle } from "@/components/containers/ThemeSwitcher";
import { MailToMe } from "@/components/views/Navbar/partials/MailToMe";
import { CheckOutCv } from "@/components/views/Navbar/partials/CheckOutCv";
import { SiteBranding } from "@/components/views/SiteBranding";
import { Navigation } from "@/components/views/Navbar/partials/Navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "@/components/icons/MenuIcon";

const NavbarContent = () => {
	return (
		<>
			<Navigation />
			<div className="flex items-center gap-3">
				<CheckOutCv />
				<MailToMe />
				<ThemeModeToggle />
			</div>
		</>
	);
};

export const Navbar = () => {
	return (
		<header className="section-container flex min-h-16 items-center justify-between py-4">
			<SiteBranding />
			<Sheet>
				<SheetTrigger asChild>
					<Button className="md:hidden" size="icon" variant="outline">
						<MenuIcon />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<div className="flex flex-col items-start gap-3 p-4">
						<NavbarContent />
					</div>
				</SheetContent>
			</Sheet>
			<div className="hidden items-center gap-6 md:flex">
				<NavbarContent />
			</div>
		</header>
	);
};
