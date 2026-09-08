"use client";
import Link from "next/link";
import { useThemeContext } from "@/contexts/ThemeContext";

function InfoButton() {
    const { isDark } = useThemeContext();
    return (
        <>
            <div className={`flex items-center justify-around w-full mt-4`}>
                <Link href={"/contact-me"} className={isDark
                     ? "bg-[#252525] p-2 px-5 rounded-md text-sm  hover:bg-blue-600 transition-all duration-150" 
                     : "bg-blue-500 p-2 px-5 rounded-md text-sm hover:bg-blue-600 transition-all duration-150 text-white"
                     
                }>تماس با من</Link>
                <Link href={"/"} className={isDark 
                    ? "border border-[#252525] p-2 px-5 rounded-md text-sm hover:bg-[#252525] transition-all duration-150" 
                    : "border border-gray-600 p-2 px-5 rounded-md text-sm hover:bg-gray-100 text-gray-600 transition-all duration-150"
                
                }>نمونه کار ها</Link>
            </div>
        </>
    )
};

export default InfoButton;