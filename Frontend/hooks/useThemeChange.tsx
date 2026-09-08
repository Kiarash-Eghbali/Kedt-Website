"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useState } from "react";

interface ReturnValues {
    isDark: boolean;
    toggleTheme: () => void;
}

function useThemeChange(): ReturnValues {
    const {isDark, setIsDark} = useThemeContext();

    function toggleTheme() {
        setIsDark(prev => !prev);
    };

    return { isDark, toggleTheme };
}

export default useThemeChange;
