"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { faThumbsDown, faThumbsUp, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["500"] });;

function LikeCountBox() {
	const { isDark } = useThemeContext();


	return (
		<>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#dadada] bg-white rounded-xl"}`}>
				<div className={`flex  items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={faThumbsUp}
						className={` ${isDark ? "text-xl text-green-500" : "text-xl text-green-500"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#d1d1d1] bg-white rounded-xl"}`}>
				<div className={`flex items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={faThumbsDown}
						className={` ${isDark ? "text-xl text-red-500" : "text-xl text-red-500"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#d1d1d1] bg-white rounded-xl"}`}>
				<div className={`flex items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={faEye}
						className={` ${isDark ? "text-xl text-blue-500" : "text-blue-500 text-xl"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
		</>
	);
}

export default LikeCountBox;
