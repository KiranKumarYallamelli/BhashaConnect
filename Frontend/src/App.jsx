import './App.css'
import Signup from './pages/Registration/registration.jsx';
import Home from './pages/Home/home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Registration/login.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
