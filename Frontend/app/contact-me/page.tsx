import type { Metadata } from "next";
import FAQBox from "@/components/Contact-me/ContactFAQ/FAQBox";
import ContactInfoBox from "@/components/Contact-me/ContactInfo/ContactInfoBox";

export const metadata: Metadata = { title: "تماس با کیارش اقبالی", description: "برای همکاری، طراحی و توسعه وبسایت یا مطرح‌کردن پرسش‌های خود از راه‌های ارتباطی KEDT با کیارش اقبالی در تماس باشید.", alternates: { canonical: "/contact-me" } };

function contactMe() {
    return (
        <>
            <main className="md:w-[80%] mt-30 flex items-center justify-center flex-col gap-30 mx-auto">
                <ContactInfoBox />
                <FAQBox />
            </main>
        </>
    )
};

export default contactMe;