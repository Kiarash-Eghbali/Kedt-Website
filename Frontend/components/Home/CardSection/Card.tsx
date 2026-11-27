import CardInterFace from "@/types/CardInterFace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ icon, title, body, className }: CardInterFace) {
  return (
    <article className={`${className ?? ""} kedt-process-card group box-border flex h-full min-h-[290px] w-full flex-col items-center justify-start gap-5 rounded-2xl border p-6 text-center`}>
      <FontAwesomeIcon icon={icon} className="text-4xl xl:text-5xl transition-transform duration-300 group-hover:scale-110" />
      <h2 className="text-lg font-bold lg:text-base xl:text-lg">{title}</h2>
      <p className="m-0 text-xs leading-7">{body}</p>
    </article>
  );
}
export default Card;
