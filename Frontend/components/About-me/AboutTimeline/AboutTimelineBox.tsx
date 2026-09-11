"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import AboutTimeline from "./AboutTimeline";

function AboutTimelineBox() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`mt-10 flex items-center justify-center flex-col`}>
                <h1 className={`text-xl text-center ${isDark ? "text-[#888888] font-bold" : "text-gray-600 font-bold"}`}>مسیر یادگیری</h1>
                <AboutTimeline />
            </section>
        </>
    )
};

export default AboutTimelineBox;