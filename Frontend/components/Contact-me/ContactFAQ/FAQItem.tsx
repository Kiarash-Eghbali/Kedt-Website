"use client";
import { useThemeContext } from "@/contexts/ThemeContext"; 
import { useState } from "react";

function FAQItem() {
    const { isDark } = useThemeContext();
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return (
        <>
        
        </>
    )
};

export default FAQItem;