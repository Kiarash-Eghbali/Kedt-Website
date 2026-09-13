import { ThemeProvider } from "@/contexts/ThemeContext";
import useThemeChange from "@/hooks/useThemeChange";
import { renderHook } from "@testing-library/react";
import { act } from "react";


describe("test useThemeChange hook", () => {
    
    test("return Hooks not be undefined", () => {
        const {result} = renderHook(() => useThemeChange(), {
            wrapper: ({children}) => <ThemeProvider>{children}</ThemeProvider>
        });
        expect(result.current.isDark).toBeFalsy()
        expect(typeof result.current.toggleTheme).toBe("function")
    })

    test("toggleTheme() isDark = true", () => {
        const {result} = renderHook(() => useThemeChange(), {
            wrapper: ({children}) => <ThemeProvider>{children}</ThemeProvider>
        })
        act(() => {
            result.current.toggleTheme()
        })
        expect(result.current.isDark).toBeTruthy()
    })

    test("toggleTheme() isDark = false", () => {
        const { result } = renderHook(() => useThemeChange(), {
            wrapper: ({children}) => <ThemeProvider>{children}</ThemeProvider>
        });
        act(() => {
            result.current.toggleTheme()
            result.current.toggleTheme()
        })
        expect(result.current.isDark).toBeFalsy()
    })
})