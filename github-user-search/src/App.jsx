// import { useState } from 'react'
// import { useRef } from 'react'
import './App.css'

function App() {
// const {item , setItem} = useState([])
// const inputRef = useRef()

// function onSubmit(e){

//       e.preventDefault()

//       const value = inputRef.current.value
//       if (value === "") return
//       setItem(prev => {
//         return [...prev, value]
//       }),
//       inputRef.current.value = ""
// }
  return (
    <>
    <h1>Users Search</h1>
    < form>
      <input type='search' name='search' />
      <button type='submit'>search</button>
    </form>
    <h3>Profile found:</h3>
    {/* {item.Array.map(item => (
      <div>{item}</div>
    ))}  */}
    </>
  )
}

export default App
 