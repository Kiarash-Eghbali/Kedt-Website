"use client";
import { useThemeContext } from "@/contexts/ThemeContext";

import dynamic from "next/dynamic";

const SkillInfo = dynamic(() => import("./SkillInfo"), {
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

