"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import CardInfo from "./CardInfo";



function CardInfoBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`mt-10 flex items-center justify-center flex-col`}>
				<h1 className={`text-xl text-center ${isDark ? "text-[#888888] font-bold" : "text-gray-600 font-bold"}`}>مراحل ساخت سایت</h1>
				<CardInfo />
			</section>
		</>
	);
}

export default CardInfoBox;
