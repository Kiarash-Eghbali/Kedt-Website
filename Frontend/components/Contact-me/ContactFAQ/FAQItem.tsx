"use client";
import { useThemeContext } from "@/contexts/ThemeContext"; 
import FAQInterface from "@/types/FAQInterface";
import { useState } from "react";

function FAQItem({ title, content, className }: FAQInterface) {
    const { isDark } = useThemeContext();
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return (
        <>

        </>
    )
};

export default FAQItem;