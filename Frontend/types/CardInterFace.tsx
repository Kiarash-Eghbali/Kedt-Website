import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardInterFace {
    icon: IconProp | string;
    title: string;
    body: string;
    className?: string ;
}

export default CardInterFace;