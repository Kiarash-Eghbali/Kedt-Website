"use client";
import ReactionContextType from "@/types/ReactionContextType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useThemeContext } from "./ThemeContext";

const ReactionContext = createContext<ReactionContextType | null>(null);
const API = process.env.NEXT_PUBLIC_API_URL;

export function ReactionProvider({ children }: { children: ReactNode }) {
  const [likes, setLike] = useState(0);
  const [dislikes, setDislike] = useState(0);
  const { isDark } = useThemeContext();

  useEffect(() => {
    if (!API) return;
    const controller = new AbortController();
    fetch(`${API}/reaction`, { credentials: "include", signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) return;
        const data = await res.json();
        setLike(Number(data?.values?.likes) || 0);
        setDislike(Number(data?.values?.dislikes) || 0);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") console.error("Reaction data could not be loaded", error);
      });
    return () => controller.abort();
  }, []);

  async function submitReaction(type: "like" | "dislike") {
    if (!API) {
      toast.info("سرویس ثبت واکنش در حال حاضر در دسترس نیست", { theme: isDark ? "dark" : "light" });
      return;
    }
    try {
      const res = await fetch(`${API}/reaction/${type}`, { method: "POST", credentials: "include" });
      if (!res.ok) throw new Error("Reaction request failed");
      const data = await res.json();
      if (data?.code === "LIKED_OR_DISLIKE_BEFORE") {
        toast.warning("قبلاً نظرت رو ثبت کردی", { theme: isDark ? "dark" : "light" });
        return;
      }
      if (type === "like") setLike(Number(data?.value?.likes) || 0);
      else setDislike(Number(data?.value?.dislikes) || 0);
      toast.success(type === "like" ? "لایکت ثبت شد" : "نظرت ثبت شد", { theme: isDark ? "dark" : "light" });
    } catch {
      toast.error("ثبت واکنش انجام نشد؛ دوباره تلاش کن", { theme: isDark ? "dark" : "light" });
    }
  }

  return <ReactionContext.Provider value={{ likes, dislikes, likeFn: () => submitReaction("like"), dislikeFn: () => submitReaction("dislike") }}>{children}</ReactionContext.Provider>;
}

export function useReactionContext() {
  const context = useContext(ReactionContext);
  if (!context) throw new Error("ReactionContext must be used within ReactionProvider");
  return context;
}
