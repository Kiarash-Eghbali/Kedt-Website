"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ViewContext = createContext<number | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [views, setViews] = useState(0);
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API) return;
    const controller = new AbortController();
    fetch(`${API}/reaction`, { credentials: "include", signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) return;
        const data = await res.json();
        setViews(Number(data?.values?.views) || 0);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") console.error("View count could not be loaded", error);
      });
    return () => controller.abort();
  }, [API]);

  return <ViewContext.Provider value={views}>{children}</ViewContext.Provider>;
}

export function useViewContext() {
  const context = useContext(ViewContext);
  if (context === null) throw new Error("useViewContext must be used within ViewProvider");
  return context;
}
