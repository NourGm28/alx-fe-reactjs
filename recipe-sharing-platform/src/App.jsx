import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/submit" element={<RecipeForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
