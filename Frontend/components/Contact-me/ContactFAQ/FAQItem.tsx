"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import FAQInterface from "@/types/FAQInterface";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FAQItem({ title, content, className }: FAQInterface) {
	const { isDark } = useThemeContext();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`w-[95%]  mx-auto flex md:w-[70%] items-start px-1 py-3 rounded-md flex-col  ${isDark ? "bg-[#252525] " : "bg-[#eeeeee] border border-[#d1d1d1]"}`}
			>
				<div className={`${className ? className : ""} pt-3 self-start w-full flex items-center gap-3 px-1`}>
					<div className={`flex items-center justify-between  w-full`}>
						<h1 className={`text-xs md:text-lg select-none ${isDark ? "text-gray-300" : "text-[#252525]"}`}>{title}</h1>
						<span className="text-left pl-2 ">
							<FontAwesomeIcon
								icon={faArrowRight}
								className={`text-lg font-bold cursor-pointer   ${isOpen ? `rotate-90  ${isDark ? "text-blue-500" : "text-blue-600"}` : isDark ? "" : "text-gray-600"}  transition-all duration-150`}
							/>
						</span>
					</div>
				</div>

				<div className="w-[90%]  overflow-hidden">
					<h2 className={`w-full md:text-base select-none px-1 mx-auto text-xs mt-2 transition-all duration-150 ease-in-out ${isDark ? "text-[#9e9e9e]" : "text-gray-600"} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 mt-0"}`}>
						{content}
					</h2>
				</div>
			</div>
		</>
	);
}

export default FAQItem;
