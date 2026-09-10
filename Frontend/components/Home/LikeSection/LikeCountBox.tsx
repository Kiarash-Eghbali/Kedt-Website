"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["500"] });
library.add(fas, far, fab);

function LikeCountBox() {
	const { isDark } = useThemeContext();
	const likes: IconProp = "fa-solid fa-thumbs-up";
	const disLikes: IconProp = "fa-solid fa-thumbs-down";
    const view: IconProp = "fa-solid fa-eye";

	return (
		<>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#dadada] bg-white rounded-xl"}`}>
				<div className={`flex  items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={likes}
						className={` ${isDark ? "text-xl text-green-500" : "text-xl text-green-500"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#d1d1d1] bg-white rounded-xl"}`}>
				<div className={`flex items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={disLikes}
						className={` ${isDark ? "text-xl text-red-500" : "text-xl text-red-500"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
			<div className={` flex items-center justify-center gap-2 px-3 py-2  ${isDark ? "bg-[#252525] rounded-xl" : "border border-[#d1d1d1] bg-white rounded-xl"}`}>
				<div className={`flex items-center justify-center gap-1`}>
					<FontAwesomeIcon
						icon={view}
						className={` ${isDark ? "text-xl text-blue-500" : "text-blue-500 text-xl"} `}
					/>
				</div>
				<h1 className={`text-xl ${poppins.className} ${isDark ? "" : "text-gray-600"}`}>0</h1>
			</div>
		</>
	);
}

export default LikeCountBox;
