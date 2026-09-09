"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import useThemeChange from "@/hooks/useThemeChange";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
import Link from "next/link";

function ThemeButton() {
	const { isDark, toggleTheme } = useThemeChange();
	return (
		<>
			<div className="flex itesm-center  justify-center  gap-3">
				<button
					onClick={toggleTheme}
					className={`w-9 h-9 rounded-md flex items-center justify-center border ${isDark ? "border-[#252525] hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}
				>
					<FontAwesomeIcon
						icon={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
						className={isDark ? "text-white text-sm" : "text-gray-600 text-sm"}
					/>
				</button>
				<button className={`w-9 h-9 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}>
					<FontAwesomeIcon
						icon="fa-solid fa-bars"
						className={isDark ? "text-white text-sm" : "text-gray-600 text-sm"}
					/>
				</button>
			</div>
		</>
	);
}

export default ThemeButton;
