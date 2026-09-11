"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import StatisticsInterface from "@/types/StatisticsInterface";

function Statistics({ icon, name, content, className, classTitle }: StatisticsInterface) {
    const { isDark } = useThemeContext();
    return (
        <>

        </>
    )
};

export default Statistics;