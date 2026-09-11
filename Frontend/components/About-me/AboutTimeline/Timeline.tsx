"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import TimelineInterface from "@/types/TimelineInterface";

function Timeline({ year, title, content, className, classYear, classTitle, classContent }: TimelineInterface) {
    const { isDark } = useThemeContext();
    return (
        <>
        
        </>
    )
};

export default Timeline;