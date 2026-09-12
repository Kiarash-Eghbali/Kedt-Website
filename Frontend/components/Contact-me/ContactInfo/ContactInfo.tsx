"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import InfoParagraph from "./InfoParagraph";

function ContactInfo() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`grid grid-cols-1`}>
                <InfoParagraph />
			</section>
		</>
	);
}

export default ContactInfo;
