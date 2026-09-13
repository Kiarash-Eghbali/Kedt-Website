"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useThemeContext } from "./ThemeContext";

const ViewContext = createContext<number | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
	const [views, setViews] = useState<number>(0);
    const { isDark } = useThemeContext();
	const API = process.env.API_URL

	useEffect(() => {
		async function getViews() {
			let res = await fetch(`${API}/reaction`, { credentials: "include" });

			if (res.ok) {
				const data = await res.json();
				setViews(data.values.views)
			}
		}
		getViews();
	}, []);

	return (
		<>
			<ViewContext.Provider value={views}>{children}</ViewContext.Provider>
		</>
	);
}

export function useViewContext() {
	const context = useContext(ViewContext);
	if (context === null) {
		throw new Error("ViewContext must be used within ViewProvider");
	}
	return context;
}
