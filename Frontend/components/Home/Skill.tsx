"use client";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiMongodb, SiWordpress } from "react-icons/si";
import SkillInterface from "@/types/SkillInterface";
import { useThemeContext } from "@/contexts/ThemeContext";

function Skill({ icon: Icon, name, className, classIcon, classLabel }: SkillInterface) {
    const { isDark } = useThemeContext();
	return (
		<>
			<div className={`group flex items-center justify-center flex-col w-14 md:w-17 lg:w-20 `}>
				<div className={`  ${className ? className : ` group-hover:translate-y-[-10px] transition-all duration-150 ${isDark ? "bg-[#252525]" : "group-hover:bg-white"} w-14 h-14 md:w-17 md:h-17 lg:w-20 lg:h-20 flex items-center justify-center rounded-lg `} `}>
					<Icon className={` ${classIcon ? classIcon : ""} ${isDark ? "text-[whitesmoke]" : "text-[#555555]"} text-3xl md:text-4xl lg:text-5xl transition-all duration-150`} />
				</div>
				<h1 className={`text-xl text-transparent ${isDark ? "group-hover:text-white" : "group-hover:text-[#252525]"} transition-all duration-150 ${classLabel ? classLabel : ""} select-none`}>{name}</h1>
			</div>
		</>
	);
}

export default Skill;
