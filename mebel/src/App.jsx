import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SecondPage from './pages/AboutPage/AboutPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage   />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes>
    </>
  )
}

export default App
