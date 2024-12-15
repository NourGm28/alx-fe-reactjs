
import './App.css'

function App() {

  const onChange = (e) => {
    console.log(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <>
    <h1>GitHub Users</h1>
    <form onChange={onChange}>
      <input type='search' placeholder='Search a User' />
      <br />
      <button style={{margin:'20px'}} onSubmit={onSubmit} type='submit'>Search</button>
    </form>
    </>
  )
}

export default App
