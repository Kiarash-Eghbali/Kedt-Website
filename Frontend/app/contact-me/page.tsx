import ContactInfoBox from "@/components/Contact-me/ContactInfo/ContactInfoBox";

function contactMe() {
    return (
        <>
            <main className="md:w-[80%] mt-30 flex items-center justify-center flex-col gap-30 mx-auto">
                <ContactInfoBox />
            </main>
        </>
    )
};

export default contactMe;