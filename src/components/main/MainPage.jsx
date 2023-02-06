import MainContent from "./MainContent"
import Header from './Header.jsx'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const MainPage = () => {
  
  const currentUser = useSelector((state) => state.user.value)
  console.log(currentUser)
  
  return (
    <div className="main-page-container">
      <Header />
      <MainContent />
    </div>
  )
}

export default MainPage