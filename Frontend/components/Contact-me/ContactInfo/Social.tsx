"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import ContactSocialInterface from "@/types/ContactSocialInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social({ icon, content, className }: ContactSocialInterface) {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className={`w-full flex items-start justify-start md:items-center `}>
				<div className={`px-3 py-3  flex items-center justify-center rounded-xl ${isDark ? "bg-[#252525]" : ""}  `}>
					<FontAwesomeIcon
						icon={icon}
						className={`${className ? className : ""} text-2xl `}
					/>
				</div>
				<div className={`flex px-3 py-3 items-center justify-center`}>
					<h1 className={`text-sm md:text-xs`}>{content}</h1>
				</div>
			</div>
		</>
	);
}

export default Social;
