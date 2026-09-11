"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import StatisticsInterface from "@/types/StatisticsInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Statistics({ icon, name, content, className, classTitle }: StatisticsInterface) {
    const { isDark } = useThemeContext();
    return (
        <>
            <div className={` ${className ? className : ""} flex items-center justify-center gap-2 `}>
                <FontAwesomeIcon
                    icon={icon}
                    className={``}
                />
                <h1 className={` ${classTitle ? classTitle : ""} `}>{name}</h1>
                <h2 className={``}>{content}</h2>
            </div>
        </>
    )
};

export default Statistics;