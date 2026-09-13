"use client";
import MenuInterface from "@/types/MenuInterface";
import { createContext, ReactNode, useContext, useState } from "react";


const MenuContext = createContext<MenuInterface | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <MenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuContext.Provider>
        </>
    );
}

export function useMenuContext(): MenuInterface {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within MenuProvider");
    }
    return context;
}
