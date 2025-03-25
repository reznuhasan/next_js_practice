"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ActiveLink({path,children}) {
    const pathName=usePathname()
 
    return (
        <div>
            <Link href={path}  className={pathName === path ? "text-blue-500 font-bold" : ""}
            >{children}</Link>
        </div>
    )
}
