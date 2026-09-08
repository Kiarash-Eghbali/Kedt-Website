"use client";
import Link from "next/link";
import { useThemeContext } from "@/contexts/ThemeContext";
function Navbar() {
    const { isDark } = useThemeContext();
	return (
		<>
			<div className="flex items-center justify-center gap-10">
				<Link
					className={`hidden md:inline-block text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
					href={"/"}
				>
					خانه
				</Link>
				<Link
					href={"/about-me"}
					className={`hidden md:inline-block text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
				>
					درباره من
				</Link>
				<Link
					href={"/contact-me"}
					className={`hidden md:inline-block text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
				>
					تماس با من{" "}
				</Link>
			</div>
		</>
	);
}

export default Navbar;
