"use client";

import { useMenuContext } from "@/contexts/MenuContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { faGithubSquare, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Menu() {
	const { isDark } = useThemeContext();
	const { isOpen, setIsOpen } = useMenuContext();
	return (
		<>
			<div
				className={`z-20 md:hidden w-full h-55 rounded-md ${isOpen ? "translate-y-0" : "-translate-y-100"} transition-all duration-150 flex items-center gap-5 justify-top pt-6.5 flex-col fixed top-0 ${isDark ? "bg-[#151515] border-b border-[#252525] " : "bg-[whitesmoke] border-b border-gray-400"} `}
			>
				<div className={`w-full flex items-center px-8 justify-between`}>
					<div className={`flex items-center justify-center gap-2`}>
						<Link
							href={"https://github.com/Kiarash-Eghbali"}
							className={`w-9 h-9 relative  z-50 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}
							aria-label="Link is my Github"
						>
							<FontAwesomeIcon
								icon={faGithubSquare}
								className={`text-lg group-hover:text-[#151515] transition-all duration-150 ${isDark ? "" : "text-black"}`}
							/>
						</Link>
						<Link
							href={"https://www.linkedin.com/in/kiarash-eghbali-07968442b/"}
							className={`w-9 h-9 relative  z-50 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] text-blue-600 hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}
							aria-label="Link is my Likedin"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className={`text-lg group-hover:text-[#151515] transition-all duration-150 ${isDark ? "" : "text-blue-700"}`}
							/>
						</Link>
						<Link
							href={"https://t.me/KiarashEgh"}
							className={`w-9 h-9 relative  z-50 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] text-blue-400 hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}
							aria-label="Link is my Telegram"
						>
							<FontAwesomeIcon
								icon={faTelegram}
								className={`text-lg group-hover:text-[#151515] transition-all duration-150 ${isDark ? "" : "text-blue-500"}`}
							/>
						</Link>
					</div>

					<button
						aria-label="mobileMenu"
						onClick={() => setIsOpen(false)}
						className={`w-9 h-9 relative z-50 rounded-md flex items-center md:hidden justify-center border ${isDark ? "border-[#252525] hover:bg-[#252525]" : "border-gray-600 hover:bg-gray-200"} cursor-pointer transition-all duration-150`}
					>
						<FontAwesomeIcon
							icon={faClose}
							className={isDark ? "text-white text-sm" : "text-gray-600 text-sm"}
						/>
					</button>
				</div>

				<Link href="/">خانه</Link>
				<Link href={"/about-me"}>درباره من</Link>
				<Link href={"/contact-me"}>تماس با من</Link>
			</div>
		</>
	);
}

export default Menu;
