import NextLink from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import { siteBranding } from "@/constants/siteBranding";

const IMAGE_SIZE = 40;

export const SiteBranding = () => {
	return (
		<Button variant={"ghost"} className={"h-auto px-2"} asChild>
			<NextLink href={routes.homepage.url()} aria-label={siteBranding.siteName}>
				<span className={"flex items-center gap-2"}>
					<span
						className={
							"flex aspect-square h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-neutral-100"
						}
					>
						<NextImage
							src={siteBranding.logotypeUrl}
							alt={siteBranding.siteName}
							width={IMAGE_SIZE}
							height={IMAGE_SIZE}
							className={"h-full w-full rounded-full object-cover"}
						/>
					</span>
					<span className={"hidden text-xl font-semibold tracking-tight sm:inline"}>
						{siteBranding.name}
					</span>
				</span>
			</NextLink>
		</Button>
	);
};
