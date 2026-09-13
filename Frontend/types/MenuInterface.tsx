import { Dispatch, SetStateAction } from "react";

interface MenuInterface {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default MenuInterface;