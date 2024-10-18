
import './App.css'

function App() {

// props array index way

const studentNameArr = ["Imon", "Hasan", "Sobu", "rubel"]
const studentIDArr = ["05", "06", "07", "08"]


  return (
    <>
    <Student name = {studentNameArr[0]} id = {studentIDArr[0]}></Student>
    <Student name = {studentNameArr[1]} id = {studentIDArr[1]}></Student>
    <Student name = {studentNameArr[2]} id = {studentIDArr[2]}></Student>
    <Student name = {studentNameArr[3]} id = {studentIDArr[3]}></Student>



    
    </>
  )

  // declear compponent

  function Student(props){
    return(

      <div>
        <div className="content">
        <h1>Name: {props.name}</h1>
        <h2>ID: {props.id}</h2>
        </div>
      </div>


    )
  }


}

export default App
