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
			<div className="flex itesm-center justify-around gap-3">
                <button onClick={toggleTheme} className="w-9 h-9 rounded-md flex items-center justify-center border border-gray-600 hover:bg-gray-200 cursor-pointer transition-all duration-300">
                    <FontAwesomeIcon
                        icon={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon" }
                        className="text-gray-600 text-xl"
                    />
                </button>
				<Link
					href={"/contact-me"}
					className="p-2 rounded-lg bg-blue-500 text-white text-sm font-bold md:text-base hover:bg-blue-600 transition-all duration-300 hidden md:inline-block"
				>
					بیا صحبت کنیم
				</Link>
				<button className="w-9 h-9 rounded-md flex items-center justify-center border border-gray-600 md:hidden hover:bg-gray-200 cursor-pointer transition-all duration-300">
					<FontAwesomeIcon
						icon="fa-solid fa-bars"
						className="text-gray-600 text-xl"
					/>
				</button>
			</div>
		</>
	);
}

export default ThemeButton;
