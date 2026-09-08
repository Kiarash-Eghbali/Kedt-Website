"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import ThemeContextType from "@/types/ThemeContextType";

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [isDark, setIsDark] = useState<boolean>(false);
	return (
		<>
			<body className={`min-h-full ${isDark ? "bg-gray-900" : ""} flex flex-col`}>
				<ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
			</body>
		</>
	);
}

export const useThemeContext = () => useContext(ThemeContext);
