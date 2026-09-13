"use client";
import ReactionContextType from "@/types/ReactionContextType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useThemeContext } from "./ThemeContext";

const ReactionContext = createContext<ReactionContextType | null>(null);

export function ReactionProvider({ children }: { children: ReactNode }) {
	const API = process.env.NEXT_PUBLIC_API_URL
	console.log("API:", process.env.NEXT_PUBLIC_API_URL)
	const [likes, setLike] = useState<number>(0);
	const [dislikes, setDislike] = useState<number>(0);
    const { isDark } = useThemeContext();

	async function getValue() {
		let res = await fetch(`${API}/reaction`, { credentials: "include" });

		if (res.ok) {
			const data = await res.json();
			setLike(data.values.likes);
			setDislike(data.values.dislikes);
		}
	}

	async function likeFn() {
		let res = await fetch(`${API}/reaction/like`, { method: "POST", credentials: "include" });

		if (res.ok) {
			const data = await res.json();

			if (data.code === "LIKED_OR_DISLIKE_BEFORE") {
				toast.warning("قبلاً نظرت رو ثبت کردی", {
                    theme: isDark ? "dark" : "light"
                });
				return;
			}

			setLike(data.value.likes);
			toast.success("لایکت ثبت شد", {
                theme: isDark ? "dark" : "light"
            });
		}
	}

	async function dislikeFn() {
		let res = await fetch(`${API}/reaction/dislike`, { method: "POST", credentials: "include" });

		if (res.ok) {
			const data = await res.json();

			if (data.code === "LIKED_OR_DISLIKE_BEFORE") {
				toast.warning("قبلاً نظرت رو ثبت کردی", {
                    theme: isDark ? "dark" : "light"
                });
				return;
			}

			setDislike(data.value.dislikes);
			toast.success("نظرت ثبت شد", {
                theme: isDark ? "dark" : "light"
            });
		}
	}

	useEffect(() => {
		getValue();
	}, []);

	return (
		<>
			<ReactionContext.Provider value={{ likes, dislikes, likeFn, dislikeFn }}>
				{children}
			</ReactionContext.Provider>
		</>
	);
}

export function useReactionContext() {
	const context = useContext(ReactionContext);
	if (context === null) {
		throw new Error("ReactionContext must be used within ReactionProvider");
	}
	return context;
}
