import Link from "next/link";

function InfoButton() {
    return (
        <>
            <div className={`flex items-center justify-center`}>
                <Link href={"/contact-me"}>تماس با من</Link>
                <Link href={"/"}>نمونه کار ها</Link>
            </div>
        </>
    )
};

export default InfoButton;