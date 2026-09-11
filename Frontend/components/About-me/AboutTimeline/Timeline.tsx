"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import TimelineInterface from "@/types/TimelineInterface";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Timeline({ year, title, content, className, classYear, classTitle, classContent }: TimelineInterface) {
    const { isDark } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function setOpenHandler(): void {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`w-[95%] mx-auto flex md:w-[80%] items-center px-1 py-3 rounded-md flex-col ${isDark ? "bg-[#252525]" : ""}`}>
                <div className={`${className ? className : ""} self-start w-full flex items-center gap-3 px-1`}>
                    <div className={`px-2 py-3 pt-4 md:px-4 md:py-5 md:pt-6 flex ${isDark ? "bg-[#151515] rounded-md" : ""} items-center justify-center`}>
                        <h1 className={`${classYear ? classYear : ""} md:text-xl font-bold ${isDark ? "text-gray-100" : ""}`}>{year}</h1>
                    </div>
                    <div className={`grid grid-cols-4 md:grid-cols-1 w-full`}>
                        <h1 className={`${classTitle ? classTitle : ""} col-span-3 text-xs md:text-xl ${isDark ? "text-gray-300" : ""}`}>{title}</h1>
                        <span className="text-left pl-2 md:hidden">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                onClick={setOpenHandler}
                                className={`text-lg font-bold cursor-pointer ${isOpen ? "rotate-90" : ""} transition-all duration-150`}
                            />
                        </span>
                        <h2 className={`${classContent ? classContent : ""} hidden md:inline-block md:h-20 lg:h-15 text-sm pt-2 ${isDark ? "text-[#9e9e9e]" : ""}`}>{content}</h2>
                    </div>
                </div>
                
                <div className="w-[90%] md:hidden overflow-hidden">
                    <h2 
                        className={`w-full px-1 mx-auto text-xs mt-2 transition-all duration-150 ease-in-out ${classContent ? classContent : ""} ${isDark ? "text-[#9e9e9e]" : ""} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 mt-0"}`}
                    >
                        {content}
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Timeline;