"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Like from "./Like";

function LikeBox() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className="py-5 flex items-center justify-center flex-col">
                <Like />
            </section>
        </>
    )
}

export default LikeBox;