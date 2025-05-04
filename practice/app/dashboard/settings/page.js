"use client"

import { useRouter } from "next/navigation"

const Settings = () => {
    const router=useRouter();
    const handleClick=()=>{
          router.push("/dashboard/analytics");
    }
    return (
        <div>
            <h1 className="text-2xl">Settings Page</h1>
            <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora obcaecati voluptas porro vel facilis veniam omnis labore, aspernatur, esse, suscipit inventore magni nulla consectetur! Blanditiis obcaecati ipsam vero recusandae dignissimos.
            </p>
            <button className="bg-blue-500 my-5 py-4 px-8 text-gray-50 border-0 rounded" onClick={handleClick}>Go To Analytics</button>
        </div>
    )
}

export default Settings
