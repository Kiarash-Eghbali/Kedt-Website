"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import TimelineInterface from "@/types/TimelineInterface";

function Timeline({ year, title, content, className, classYear, classTitle, classContent }: TimelineInterface) {
    const { isDark } = useThemeContext();
    return (
        <>
            <div className={` ${className ? className : ""}w-full md:w-[80%] flex items-center justify-start gap-3 px-2 py-3 rounded-md ${isDark ? "bg-[#252525]" : ""}`}>
                <div className={`px-2 py-3 pt-4 md:px-4 md:py-5 md:pt-6 flex ${isDark ? "bg-[#151515] rounded-md" : ""} items-center justify-center`}>
                    <h1 className={`${classYear ? classYear : ""} md:text-xl font-bold ${isDark ? "text-gray-100" : ""}`}>{year}</h1>
                </div>
                <div>
                    <h1 className={`${classTitle ? classTitle : ""} md:text-xl ${isDark ? "text-gray-300" : ""}`}>{title}</h1>
                    <h2 className={`${classContent ? classContent : ""} hidden md:inline-block md:h-10 text-sm pt-2 ${isDark ? "text-[#9e9e9e]" : ""}`}>{content}</h2>
                </div>
            </div>
        </>
    )
};

export default Timeline;