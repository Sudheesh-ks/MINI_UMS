import { Routes } from 'react-router-dom'
import './App.css'
import userRoutes from './routes/userRoutes'
import { adminRoutes } from './routes/adminRoutes'

function App() {

  return (
    <>
      <Routes>
        {userRoutes()}
        {adminRoutes()}
      </Routes>
    </>
  )
}

export default App
