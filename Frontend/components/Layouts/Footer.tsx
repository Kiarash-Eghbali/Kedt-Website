"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import InfoFooter from "./Footers/InfoFooter";
import LinkFooter from "./Footers/LinkFooter";
import SocialFooter from "./Footers/SocialFooter";


function Footer() {
	const { isDark } = useThemeContext();

	return (
		<>
			<footer className={`pt-5 mt-30 border-t w-full grid grid-cols-1 md:grid-cols-3  items-center justify-center  ${isDark ? "border-[#252525]" : "border-gray-400"}`}>
				<InfoFooter />
				<LinkFooter />
				<SocialFooter />
				<div className={`py-3 md:col-span-3`}>
					<h1 className={`text-xs md:text-base ${isDark ? "text-[#d1d1d1] font-bold" : "text-gray-700 font-bold"} pt-3 text-center`}> طراحی شده توسط کیارش اقبالی {new Date().getFullYear()} ©</h1>
				</div>
			</footer>
		</>
	);
}

export default Footer;
