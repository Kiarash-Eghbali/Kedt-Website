"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import InfoParagraph from "./InfoParagraph";
import Info from "./Info";

function ContactInfo() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`grid grid-cols-1 items-start justify-start  gap-5`}>
                <InfoParagraph />
                <Info />
			</section>
		</>
	);
}

export default ContactInfo;
