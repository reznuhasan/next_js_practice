import wait from '@/app/lib/wait'
import Link from 'next/link'

const SeenPage = async() => {
    await wait(3000)
    
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
        <h1>Notifications</h1>
        <Link href={"/parallal-route"} className="text-green-500">All</Link>
      </div>
    )
  }

export default SeenPage
