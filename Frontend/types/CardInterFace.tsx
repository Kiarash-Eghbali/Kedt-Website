import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardInterFace {
    icon: IconProp ;
    title: string;
    body: string;
    className?: string ;
}

export default CardInterFace;