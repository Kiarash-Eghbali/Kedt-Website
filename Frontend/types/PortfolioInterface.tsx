import { StaticImageData } from "next/image";

interface PortfolioInterface {
    image: StaticImageData;
    title: string;
    body: string;
    link: string;
    languages: string[];
    className?: string;
    classLang?: string;
    classBody?: string;
}

export default PortfolioInterface;