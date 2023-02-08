import MainContent from "./MainContent"
import Header from './Header.jsx'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"
import { changeUserType } from "../../features/userType"
import Cookies from 'js-cookie'

const MainPage = () => {
  const dispatch = useDispatch()
  const userType = Cookies.get('user_type')
  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch(`http://localhost:3000/${userType}_me`, {
        headers: {Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (req.ok) {
        dispatch(loginStatus({ loggedIn: true}))
        dispatch(login(res.user))
        dispatch(changeUserType({ usertype: res.user_type }))
      }
    }
    if (Cookies.get('token')) {
      loadUser()
    }
  },[])

  return (
    <div className="main-page-container">
      <Header />
      <MainContent />
    </div>
  )
}

export default MainPage