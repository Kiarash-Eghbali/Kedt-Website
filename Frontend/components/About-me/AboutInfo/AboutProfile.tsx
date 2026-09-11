"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import pic from "@/public/nano-banana-3bbbe006478acfc767060b100a5c70ab-1_-_Copy-removebg-preview.webp";
import Image from "next/image";

function AboutProfile() {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className={` w-[85%] mx-auto ${isDark ? "border border-[#444444] px-3 py-2 rounded-xl" : "border border-gray-300 px-3 py-2 rounded-xl"}  md:w-[90%]  flex items-center justify-center flex-col`}>
				<Image
					src={pic}
					alt={"kedt-team-pic"}
					width={80}
					height={80}
					className={`w-20 h-20 md:w-25 md:h-25 p-2 object-cover rounded-full ${isDark ? "bg-[#252525]" : "bg-white"}`}
					sizes="80px"
					loading="lazy"
				/>
				<h1 className={`text-xl md:text-2xl font-bold ${isDark ? "text-gray-300" : "text-gray-800"} mt-1`}>کیارش اقبالی</h1>
				<h2 className={`text-md pt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>برنامه نویس فول استک</h2>
				<p className={`text-sm text-center mt-2 ${isDark ? "text-[#888888]" : ""}`}>طراح و توسعه دهنده وبسایت های واکنش گرا , فروشگاهی و فول استک</p>
			</div>
		</>
	);
}

export default AboutProfile;
