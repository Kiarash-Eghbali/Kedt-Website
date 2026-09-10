"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Skill from "./Skill";
import { SiExpress,  SiLaravel, SiMongodb, SiNextdotjs, SiNodedotjs,  SiReact, SiTypescript, SiWordpress } from "react-icons/si";

function SkillInfo() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`py-5 border-b ${isDark ? "border-[#252525]" : "text-gray-400"} grid grid-cols-4 md:grid-cols-8 items-center   gap-3 `}>
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
                    classIcon={`group-hover:text-[#252525]`}
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