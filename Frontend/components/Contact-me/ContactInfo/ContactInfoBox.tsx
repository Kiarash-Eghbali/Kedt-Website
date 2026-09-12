"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import ContactInfo from "./ContactInfo";


function ContactInfoBox() {
    const { isDark } = useThemeContext();
    return (
        <>  
            <section className={`w-full p-1 md:w-[80%] mt-10 flex items-center justify-center md:items-start md:justify-start flex-col`}>
                <h1 className={`text-xl text-center ${isDark ? "text-[#888888] font-bold" : "text-gray-600 font-bold"}`}>تماس با من</h1>
                <ContactInfo />
            </section>
        </>
    )
};

export default ContactInfoBox;