"use client"

import { useRouter } from "next/navigation";


export default function CustomButton({path,children}) {
    const router=useRouter();
    const handleClick=()=>{
       router.push(path)
    }
  return (
    <button onClick={handleClick} className="bg-blue-600 p-8 m-2 text-white-800">{children}</button>
  )
}
