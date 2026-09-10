"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";

function LinkFooter() {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className={`p-2 w-[90%] h-full  md:w-full mx-auto pb-5 md:pb-1 border-b ${isDark ? "border-[#252525]" : "border-gray-400"} md:border-none`}>
				<h1 className={`text-sm pt-3 font-bold md:text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>لینک های مهم</h1>
				<div className="flex items-start pt-4 gap-1 justify-center flex-col">
					<Link
						href={"/"}
						className={`md:text-md  transition-all duration-150 ${isDark ? "text-[#777777] hover:text-white " : "text-gray-400 hover:text-black"} `}
					>
						خانه
					</Link>
					<Link
						href={"/about-me"}
						className={`md:text-md  transition-all duration-150 ${isDark ? "text-[#777777] hover:text-white " : "text-gray-400 hover:text-black"} `}
					>
						درباره من
					</Link>
					<Link
						href={"/contact-me"}
						className={`md:text-md  transition-all duration-150 ${isDark ? "text-[#777777] hover:text-white " : "text-gray-400 hover:text-black"} `}
					>
						تماس با من
					</Link>
				</div>
			</div>
		</>
	);
}

export default LinkFooter;
