import { IconLink } from "@/components/views/IconLink";
import { GitHub } from "@/components/icons/GitHub";
import { SOCIAL_MEDIA } from "@/constants/socialMedia";

const TEXT = "Check out my GitHub";

export const CheckOutGitHub = () => {
	return (
		<IconLink
			tooltipText={TEXT}
			aria-label={TEXT}
			icon={<GitHub />}
			href={SOCIAL_MEDIA.github.href}
			target={"_blank"}
			rel={"noopener noreferrer nofollow"}
		/>
	);
};
