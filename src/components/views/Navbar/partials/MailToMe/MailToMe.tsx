import { EMAIL_ADDRESS } from "@/constants/global";
import { Mail } from "@/components/icons/Mail";
import { IconLink } from "@/components/views/IconLink";

const TEXT = "Let's talk, email me";

export const MailToMe = () => {
	return (
		<IconLink
			tooltipText={TEXT}
			aria-label={TEXT}
			icon={<Mail />}
			href={`mailto:${EMAIL_ADDRESS}`}
		/>
	);
};
