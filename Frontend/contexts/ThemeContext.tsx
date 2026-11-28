"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import ThemeContextType from "@/types/ThemeContextType";

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsDark(window.localStorage.getItem("kedt-theme") === "dark");
    } catch {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";
    try {
      window.localStorage.setItem("kedt-theme", isDark ? "dark" : "light");
    } catch {
      // Theme remains functional when storage is unavailable.
    }
  }, [isDark]);

  return (
    <body data-theme={isDark ? "dark" : "light"} className="min-h-full flex flex-col">
      <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
    </body>
  );
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
}
