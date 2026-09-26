"use client";
import InfoParagraph from "./InfoParagraph";
import Info from "./Info";

function ContactInfo() {
	return (
		<>
			<section className={`grid grid-cols-1 items-start justify-start  gap-10`}>
                <InfoParagraph />
                <Info />
			</section>
		</>
	);
}

export default ContactInfo;
