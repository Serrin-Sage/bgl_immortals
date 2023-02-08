import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"
import { changeUserType } from "../../features/userType"
import Cookies from 'js-cookie'
import Header from "../main/Header"
const StudentPage = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.value)

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch('http://localhost:3000/parent_me', {
        headers: {Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (req.ok) {
        dispatch(loginStatus({ loggedIn: true }))
        dispatch(login(res.user))
        dispatch(changeUserType({ usertype: res.user_type }))
      }
    }
    if (Cookies.get('token')) {
      loadUser()
    }
  },[])

  return (
    <div>
      <Header />
      <div className="student-page-container">
        {currentUser.name}
      </div>
    </div>
  )
}

export default StudentPage