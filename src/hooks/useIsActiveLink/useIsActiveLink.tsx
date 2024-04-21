import { usePathname } from "next/navigation";
import { type UseIsActiveLinkProps } from "@/hooks/useIsActiveLink/types";

export const useIsActiveLink = ({ href, exact = false }: UseIsActiveLinkProps) => {
	const pathname = usePathname();
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;

	return (
		(matchedPath &&
			pathname &&
			(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
		false
	);
};
