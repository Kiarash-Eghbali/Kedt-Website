"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import AboutProfile from "./AboutProfile";
import AboutParagraph from "./AboutParagraph";


function AboutBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`mt-40 lg:w-[80%] xl:w-[70%] md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center`}>
				<AboutProfile />
				<AboutParagraph />
			</section>
		</>
	);
}

export default AboutBox;
