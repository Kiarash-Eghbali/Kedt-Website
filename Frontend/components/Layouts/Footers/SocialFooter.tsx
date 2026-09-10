"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas, far, fab);

function SocialFooter() {
	const { isDark } = useThemeContext();
	const telegram: IconProp = "fa-brands fa-telegram";
	const linkedIn: IconProp = "fa-brands fa-linkedin";
	const gitHub: IconProp = "fa-brands fa-square-github";
	return (
		<>
			<div className={`p-2 w-[90%] h-full md:w-full  mx-auto pb-5 md:pb-1 border-b ${isDark ? "border-[#252525]" : "border-gray-400"} md:border-none`}>
				<h1 className={`text-sm pt-3 md:text-lg font-bold ${isDark ? "text-gray-300" : "text-gray-700"}`}>شبکه های اجتماعی</h1>
				<div className={`flex items-center pt-5 gap-5 justify-start`}>
					<Link
						href={"/"}
						className={`px-2 py-2 md:px-3 md:py-3 flex items-center justify-center rounded-md group ${isDark ? "bg-[#252525] border border-[#252525]" : "bg-white border border-gray-300"} hover:-translate-y-1 transition-all duration-150`}
					>
						<FontAwesomeIcon
							icon={telegram}
							className={`text-2xl group-hover:text-blue-400 transition-all duration-150 ${isDark ? "" : "text-[#444444]"}`}
						/>
					</Link>
					<Link
						href={"/"}
						className={`px-2 py-2 md:px-3 md:py-3 flex items-center justify-center rounded-md group ${isDark ? "bg-[#252525] border border-[#252525]" : "bg-white border border-gray-300"} hover:-translate-y-1 transition-all duration-150`}
					>
						<FontAwesomeIcon
							icon={linkedIn}
							className={`text-2xl group-hover:text-blue-500 transition-all duration-150 ${isDark ? "" : "text-[#444444]"}`}
						/>
					</Link>
					<Link
						href={"/"}
						className={`px-2 py-2 md:px-3 md:py-3 flex items-center justify-center rounded-md group ${isDark ? "bg-[#252525] border border-[#252525]" : "bg-white border border-gray-300"} hover:-translate-y-1 transition-all duration-150`}
					>
						<FontAwesomeIcon
							icon={gitHub}
							className={`text-2xl group-hover:text-[#151515] transition-all duration-150 ${isDark ? "" : "text-[#444444]"}`}
						/>
					</Link>
				</div>
			</div>
		</>
	);
}

export default SocialFooter;
