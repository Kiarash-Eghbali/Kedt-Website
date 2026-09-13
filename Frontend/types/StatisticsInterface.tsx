import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface StatisticsInterface {
    icon: IconProp;
    name: string;
    content: string;
    className?: string;
    classIcon?: string;
    classTitle?: string;
    classContent?: string;
};

export default StatisticsInterface;