import MainContent from "./MainContent"
import Header from './Header.jsx'
import { Routes, Route } from "react-router-dom"
const MainPage = () => {

  return (
    <div className="main-page-container">
      <Header />
      <MainContent />
    </div>
  )
}

export default MainPage