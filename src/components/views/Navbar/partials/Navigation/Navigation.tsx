import { NAV_LINKS } from "@/constants/navLinks";
import { ActiveLink } from "@/components/containers/ActiveLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className={"md: flex flex-col items-center gap-3 md:flex-row"}>
				{NAV_LINKS.map(({ name, label, ...props }) => (
					<li key={`main-nav-link-${name}`}>
						<ActiveLink {...props}>{label}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
