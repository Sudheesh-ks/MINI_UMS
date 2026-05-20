import { Routes } from 'react-router-dom'
import './App.css'
import userRoutes from './routes/userRoutes'

function App() {

  return (
    <>
      <Routes>
        {userRoutes()}
      </Routes>
    </>
  )
}

export default App
