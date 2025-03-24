export default function DashboardLayout({children}){
    return (
        <>
         <nav>
            <ul className="flex p-4 gap-5">
                <li>Settings</li>
                <li>Analytics</li>
            </ul>
        </nav>
        {children}
        </>
       
    )
}