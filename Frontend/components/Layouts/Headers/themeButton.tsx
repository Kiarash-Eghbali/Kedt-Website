"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useThemeChange from "@/hooks/useThemeChange";
import Link from "next/link";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

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
						icon={isDark ? faSun : faMoon}
						className={isDark ? "text-white text-sm" : "text-gray-600 text-sm"}
					/>
				</button>
				<button className={`w-9 h-9 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}>
					<FontAwesomeIcon
						icon={faBars}
						className={isDark ? "text-white text-sm" : "text-gray-600 text-sm"}
					/>
				</button>
			</div>
		</>
	);
}

export default ThemeButton;
