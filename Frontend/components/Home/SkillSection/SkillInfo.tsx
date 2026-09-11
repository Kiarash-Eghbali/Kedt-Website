"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Skill from "./Skill";
import { SiExpress } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function SkillInfo() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`py-5 border-b ${isDark ? "border-[#252525]" : "text-gray-400"} grid grid-cols-4 md:grid-cols-8 items-center gap-3 lg:gap-5 `}>
                <Skill
                    icon={SiTypescript}
                    name="TypeScript"
                    classIcon={`group-hover:text-blue-600`}
                />
                <Skill
                    icon={SiReact}
                    name="React"
                    classIcon={`group-hover:text-blue-400`}
                />
                <Skill
                    icon={SiNextdotjs}
                    name="NextJs"
                    classIcon={`group-hover:text-[#111111]`}
                />

                <Skill
                    icon={SiNodedotjs}
                    name="NodeJs"
                    classIcon={`group-hover:text-green-700`}
                />
                <Skill
                    icon={SiExpress}
                    name="ExpressJs"
                    classIcon="group-hover:text-gray-700"
                />
                <Skill
                    icon={SiLaravel}
                    name="Laravel"
                    classIcon={`group-hover:text-red-500`}
                />
                <Skill
                    icon={SiWordpress}
                    name="Wordpress"
                    classIcon={`group-hover:text-gray-400`}
                />
                <Skill
                    icon={SiMongodb}
                    name="MongoDB"
                    classIcon={`group-hover:text-green-700`}
                />
            </section>
        </>
    )
};

export default SkillInfo;