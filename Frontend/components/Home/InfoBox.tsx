"use client";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["500"] });
import { useThemeContext } from "@/contexts/ThemeContext";
import InfoButton from "./InfoButton";

function InfoBox() {
    const { isDark } = useThemeContext();
	return (
		<>
			<div className="flex items-center justify-center flex-col">
				<div className="flex items-center justify-center flex-col gap-2">
                    <div className={`border ${isDark ? "bg-[#202020] border-blue-500/30 " : "bg-gray-500/5 border-blue-500"} mt-10 p-2 rounded-xl   flex items-center justify-center gap-1`}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <h2 className={`text-[12px] font-bold ${poppins.className}`}>Full Stack Developer</h2>
                    </div>
					<h1 className={` text-4xl pt-7 ${isDark ? "text-gray-300" : "" } font-black ${poppins.className}`}>Kiarash Eghbali</h1>
                    <p className={`font-bold ${isDark ? "text-blue-400" : "text-gray-600"}`}>طراح و توسعه دهنده وبسایت های مدرن</p>
                    <p className={`text-[11px] mt-5 m-1 ${isDark ? "text-blue-100" : "text-gray-500"} text-center`}>من کیارش اقبالی، توسعه‌دهنده فول‌استک ۱۶ ساله از ایرانم. با React، Next.js، TypeScript، Express و Laravel کار می‌کنم و عاشق ساختن چیزهای تمیز و مدرنم.</p>
                    <InfoButton />
				</div>
			</div>
		</>
	);
}

export default InfoBox;
