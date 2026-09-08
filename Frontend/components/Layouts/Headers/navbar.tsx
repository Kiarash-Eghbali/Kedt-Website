"use client";
import Link from "next/link";
import { useThemeContext } from "@/contexts/ThemeContext";
function Navbar() {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className="hidden  md:flex  items-center p-5 justify-center gap-10">
				<Link
					className={`text-center text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
					href={"/"}
				>
					خانه
				</Link>
				<Link
					href={"/about-me"}
					className={`text-center text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
				>
					درباره من
				</Link>
				<Link
					href={"/contact-me"}
					className={`text-center text-gray-400 ${isDark ? "hover:text-white" : " hover:text-gray-800"} transition-all duration-300`}
				>
					تماس با من{" "}
				</Link>
			</div>
		</>
	);
}

export default Navbar;
