import MainContent from "./MainContent"
import Header from './Header.jsx'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MainPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/home")
  },[])

  return (
    <div className="main-page-container">
      <Header />
      <MainContent />
    </div>
  )
}

export default MainPage