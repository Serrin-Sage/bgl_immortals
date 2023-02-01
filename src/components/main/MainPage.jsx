import MainContent from "./MainContent"
import Header from './Header.jsx'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MainPage = () => {

  return (
    <div className="main-page-container">
      <Header />
      <MainContent />
    </div>
  )
}

export default MainPage