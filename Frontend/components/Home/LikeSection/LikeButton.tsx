"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function LikeButton() {
	const { isDark } = useThemeContext();
    const like : IconProp = 'fa-solid fa-thumbs-up';
    const disLike: IconProp = "fa-solid fa-thumbs-down";

	return (
		<>
            <h1 className={`text-lg font-bold ${isDark ? "text-[#888888]" : "text-gray-600"} `}>آیا از عملکرد سایت راضی بودید ؟</h1>
			<div className={`mt-5 flex items-center justify-center h-10 w-60  gap-15`}>
				<button
					className={`group ${isDark ? "bg-[#252525] px-3 py-3 hover:scale-110 transition-all duration-150  rounded-md flex items-center justify-center border border-[#252525]" : "bg-white px-3 py-3 hover:scale-110 transition-all duration-150 rounded-md flex items-center justify-center border border-[#999999]"} `}
				>
					<h1 className={`hidden group-hover:inline-block transition-all duration-150 ${isDark ? "" : "text-gray-600"}`}>راضی بودم</h1>
					<FontAwesomeIcon
						icon={like}
						className={` text-xl group-hover:text-green-500 transition-all duration-150 ${isDark ? "" : "text-[#444444]"} `}
					/>
				</button>
				<button
					className={`group ${isDark ? "bg-[#252525] px-3 py-3 hover:scale-110 transition-all duration-150 rounded-md flex items-center justify-center border border-[#252525]" : "bg-white px-3 py-3 hover:scale-110 transition-all duration-150 rounded-md flex items-center justify-center border border-[#999999]"} `}
				>
					<h1 className={`hidden group-hover:inline-block transition-all duration-150 ${isDark ? "" : "text-gray-600"}`}>راضی نبودم</h1>
					<FontAwesomeIcon
						icon={disLike}
						className={` text-xl group-hover:text-red-500 group-hover:animate-pulse transition-all duration-150 ${isDark ? "" : "text-[#444444]"} `}
					/>
				</button>
			</div>
		</>
	);
};

export default LikeButton;
