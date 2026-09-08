"use client";

import { useState } from "react";

interface ReturnValues {
    isDark: boolean;
    toggleTheme: () => void;
}

function useThemeChange(): ReturnValues {
    const [isDark, setIsDark] = useState<boolean>(false);

    function toggleTheme() {
        setIsDark(prev => !prev);
    };

    return { isDark, toggleTheme };
}

export default useThemeChange;
