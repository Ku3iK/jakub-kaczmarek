import { IconLink } from "@/components/views/IconLink";
import { GitHub } from "@/components/icons/GitHub";
import { SOCIAL_MEDIA } from "@/constants/socialMedia";

export const CheckOutGitHub = () => {
	return (
		<IconLink
			tooltipText={"Check out my GitHub"}
			icon={<GitHub />}
			href={SOCIAL_MEDIA.github.href}
			target={"_blank"}
			rel={"noopener noreferrer nofollow"}
		/>
	);
};
