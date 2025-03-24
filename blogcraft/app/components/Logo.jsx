import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <>
        <Link href="/" className="lg:flex">
        <Image
        className="h-6 w-auto"
        src="/logo.svg"
        width={100}
        height={24}
        priority
        />
        </Link>
        </>
    )
}
