import wait from "@/app/lib/wait"
import Link from "next/link"

const NotificationPage = () => {
        // await wait(3000)
    
    return (
      <div style={{
          width:'300px',
          height:'300px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          border:'1px solid black',
          gap:10
      }}>
        <h1>All Notifications</h1>
        <Link href={"parallal-route/seen"} className="text-green-500">seen</Link>
      </div>
    )
  }
  
  export default NotificationPage
  