
import './App.css'

function App() {

// react props

  return (
    <>
<Students name = "Imon" id = "005"></Students>
<Students name = "sami" id = "006"></Students>
<Students name = "niloy" id = "007"></Students>
<Students name = "mazharul" id = "008"></Students>


 

  


    </>
  )


  // Declear a components 
  function Students (props) {
    return(

      <div>
        <div className="text_content">
        <h1>Name : {props.name}</h1>
        <h2>ID: {props.id}</h2>
        </div>
      </div>
      




    )

      
  }


}

export default App
