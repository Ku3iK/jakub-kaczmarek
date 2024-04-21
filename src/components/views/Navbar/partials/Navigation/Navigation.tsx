import { NAV_LINKS } from "@/constants/NAV_LINKS";
import { ActiveLink } from "@/components/containers/ActiveLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className={"flex items-center gap-3"}>
				{NAV_LINKS.map(({ name, label, ...props }) => (
					<li key={`main-nav-link-${name}`}>
						<ActiveLink {...props}>{label}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
