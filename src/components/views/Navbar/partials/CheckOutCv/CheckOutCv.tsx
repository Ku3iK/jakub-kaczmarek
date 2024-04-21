import { CV_URL } from "@/constants/global";
import { Cv } from "@/components/icons/Cv";
import { IconLink } from "@/components/views/IconLink";

export const CheckOutCv = () => {
	return (
		<IconLink tooltipText={"Check my CV"} icon={<Cv />} href={CV_URL} download target={"_blank"} />
	);
};
