import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <nav className='flex gap-5'>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
      </nav>
      {children}
      
    </div>
  )
}

export default DashboardLayout
