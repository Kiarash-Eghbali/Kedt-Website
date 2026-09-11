import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface StatisticsInterface {
    icon: IconProp;
    name: string;
    content: string;
    className?: string;
    classTitle?: string;
};

export default StatisticsInterface;