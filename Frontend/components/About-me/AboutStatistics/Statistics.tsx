"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import StatisticsInterface from "@/types/StatisticsInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Statistics({ icon, name, content, className, classIcon, classTitle, classContent }: StatisticsInterface) {
    const { isDark } = useThemeContext();
    return (
        <>
            <div className={`group border-b ${className ? className : ""} ${isDark ? "border-[#252525]" : ""} hover:scale-105 transition-all duration-150 py-2 px-5 mt-5 flex items-center justify-center flex-col gap-2 `}>
                <FontAwesomeIcon
                    icon={icon}
                    className={`${classIcon ? classIcon : ""} text-2xl`}
                />
                <h1 className={` ${classTitle ? classTitle : ""} transition-all  duration-150  text-lg font-bold ${isDark ? "text-gray-300" : ""} `}>{name}</h1>
                <h2 className={` ${classContent ? classContent : ""} ${isDark ? "text-gray-100" : ""}`}>{content}</h2>
            </div>
        </>
    )
};

export default Statistics;