
 const DashboardLayout = ({ children }) =>{
    return (
        <>
            <nav>
                <ul className="flex gap-5 p-4 border-b border-4-8 border-b-black">
                    <li>Dashboard</li>
                    <li>Analytics</li>
                </ul>
            </nav>
            {children}
        </>
    )
}
export default DashboardLayout;