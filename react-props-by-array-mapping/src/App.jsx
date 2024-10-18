
import './App.css'
import Student from './Student/Student'


function App() {
const studentArr = [
{name: "imon", id: "01"},
{name: "sobuj", id: "02"},
{name: "rubel", id: "03"},
{name: "hasan", id: "04"},

]

  return (
    <>
    {
     studentArr.map((item)=>(
      <Student key = {item.id} name = {item.name} id = {item.id} />
     ))
    }

    </>
  )
}

export default App
