import wait from "@/app/lib/wait"

const QuizPage = async() => {
        await wait(3000)
    
    return (
      <div style={{
          width:'300px',
          height:'300px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          border:'1px solid black'
      }}>
        <h1>Quiz Page</h1>
      </div>
    )
  }
  
  export default QuizPage
  