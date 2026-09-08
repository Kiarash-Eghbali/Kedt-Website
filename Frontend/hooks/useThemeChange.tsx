"use client";

import { useState } from "react";

interface ReturnValues {
    isDark: boolean;
    changeThemeHandler: () => void;
}

function useThemeChange(): ReturnValues {
	const [isDark, setIsDark] = useState<boolean>(false);
    
    function changeThemeHandler() {
        setIsDark(! isDark);
    };

    return { isDark, changeThemeHandler };
}


export default useThemeChange;