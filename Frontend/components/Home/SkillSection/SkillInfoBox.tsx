"use client";
import { useThemeContext } from "@/contexts/ThemeContext";

import dynamic from "next/dynamic";

const SkillInfo = dynamic(() => import("./SkillInfo"), {
    loading: () => (
        <section className="py-5 grid grid-cols-4 md:grid-cols-8 items-center gap-3 lg:gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-14 md:w-17 lg:w-20 h-20 animate-pulse bg-gray-200 rounded-lg" />
            ))}
        </section>
    ),
    ssr: false,
});

function SkillInfoBox() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`flex items-center justify-center flex-col mt-5`}>
                <h1 className={` text-xl font-bold ${isDark ? "text-[#888888]" : "text-gray-600"} `}>مهارت های من</h1>
                <SkillInfo />
            </section>
        </>
    )
};

export default SkillInfoBox;

