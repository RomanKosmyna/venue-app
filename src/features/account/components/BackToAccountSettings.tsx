import Link from "next/link";
import Image from "next/image";
import leftArrow from "@/src/public/svg/left-arrow.svg";

export default function BackToAccountSettings() {
    return (
        <div className="h-[65px] -mx-5 px-5 border-b border-hsla-grey-1">
            <Link
                href="/account"
                className="w-full h-full flex items-center font-medium text-hsla-white-1 tracking-[-0.049375rem]"
            >
                <Image
                    src={leftArrow}
                    alt="Arrow showing to the left"
                    width={30}
                    height={30}
                    className="mr-2"
                />
                Account Settings
            </Link>
        </div>
    )
}
// }after:rotate-45 after:translate-y-1
// before:-rotate-45 before:translate-y-0.5