import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { AuthContextProvider } from './contexts/AuthContext'
import { CountdownProvider } from './contexts/CountdownContext'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CountdownProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </CountdownProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App
