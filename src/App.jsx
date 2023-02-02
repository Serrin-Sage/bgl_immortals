import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MainPage from './components/main/MainPage'
import UserCheck from './components/signinup/UserCheck'
import SignIn from './components/signinup/SignIn'
import SignUp from './components/signinup/SignUp'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/student_or_instructor" element={<UserCheck />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
