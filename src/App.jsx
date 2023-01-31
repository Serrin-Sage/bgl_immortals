import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Header from './components/main/Header'
import MainPage from './components/main/MainPage'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
