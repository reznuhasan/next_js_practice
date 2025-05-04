
const ParaRouteLayout = ({children,assignments,notifications,quiz}) => {
  return (
    
    <>
      {children}
      <div style={{
        display:'flex',
        gap:"10px",
        flexWrap:'wrap'
      }}>

      {assignments}
      {notifications}
      {quiz}
      </div>
    </>
  )
}

export default ParaRouteLayout
