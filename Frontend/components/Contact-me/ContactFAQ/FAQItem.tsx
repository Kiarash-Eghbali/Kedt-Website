"use client";
import { useThemeContext } from "@/contexts/ThemeContext"; 
import FAQInterface from "@/types/FAQInterface";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FAQItem({ title, content, className }: FAQInterface) {
    const { isDark } = useThemeContext();
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return (
        <>
            <div className={`w-[95%] mx-auto flex md:w-[80%] items-center px-1 py-3 rounded-md flex-col ${isDark ? "bg-[#252525]" : "bg-[#eeeeee] border border-[#d1d1d1]"}`}>
                <div className={`${className ? className : ""} self-start w-full flex items-center gap-3 px-1`}>
                    <div className={`px-2 py-3 pt-4 md:px-4 md:py-5 md:pt-6 flex ${isDark ? "bg-[#151515] rounded-md" : "bg-white rounded-md"} items-center justify-center`}>
                    </div>
                    <div className={`grid grid-cols-4 md:grid-cols-1 w-full`}>
                        <h1 className={`col-span-3 text-xs md:text-xl ${isDark ? "text-gray-300" : "text-[#111111]"}`}>{title}</h1>
                        <span className="text-left pl-2 md:hidden">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                onClick={() => setIsOpen(! isOpen)}
                                className={`text-lg font-bold cursor-pointer ${isOpen ? "rotate-90" : ""} transition-all duration-150`}
                            />
                        </span>
                    </div>
                </div>
                
                <div className="w-[90%] md:hidden overflow-hidden">
                    <h2 
                        className={`w-full px-1 mx-auto text-xs mt-2 transition-all duration-150 ease-in-out ${isDark ? "text-[#9e9e9e]" : ""} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 mt-0"}`}
                    >
                        {content}
                    </h2>
                </div>
            </div>
        </>
    )
};

export default FAQItem;