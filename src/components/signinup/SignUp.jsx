import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"
import Cookies from 'js-cookie'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const whichUser = useSelector((state) => state.usertype.value)
  let postFocus = whichUser.usertype === "instructor" ? "instructors" : "users"
  let userCode = whichUser.usertype === "instructor" ? "instructor_code" : "parent_code"
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const createUser = async (e) => {
    e.preventDefault()
    if (e.target.password.value !== e.target.confirm_password.value) {
      setShowError(true)
      setErrorMessage("Password don't match")
      return
    }
    let req = await fetch(`http://localhost:3000/${postFocus}`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        [userCode]: e.target.code.value,
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        username: e.target.username.value,
        child_name: e.target.child_name ? e.target.child_name.value : undefined
      })
    })
    let res = await req.json()
    if (req.ok) {
      Cookies.set('token', res.token)
      dispatch(loginStatus({ loggedIn: true }))
      dispatch(login(res))
      navigate(`/${whichUser.usertype}_page`)
    } else {
      setShowError(true)
      setErrorMessage(res.error)
    }
  }
  return (
    <div className="signinup-page-container">
      <div className="signinup-content">
        <h1>Sign Up</h1>
        <form onSubmit={createUser} onFocus={() => setShowError(false)}>
          <input type="text" name="code" placeholder={`Enter ${whichUser.usertype} code`} className="user-input"  />
          <br />
          <br />
          <input type="text" name="name" placeholder="Enter Full Name" className="user-input" />
          {whichUser.usertype === "parent" ? 
            <>
              <input type="text" name="child_name" placeholder="Enter Child's Full Name" className="user-input"/> 
              <br/>
              <br/>
            </>
            : null
          }
          <input type="text" name="email" placeholder="Enter Email" className="user-input" />
          <br/>
          <br/>
          <input type="password" name="password" placeholder="Create Password" className="user-input" />
          <input type="password" name="confirm_password" placeholder="Confirm password" className="user-input" />
          <br/>
          <br/>
          <input type="text" name="username" placeholder="Create username (optional)" className="user-input" />
          <br/>
          <br/>
          <p className="error-message">{showError ? errorMessage : ""}</p>
          <br/>
          <input type="submit" value="Register" className="signinup-btn" />
        </form>
      </div>
    </div>
  )
}

export default SignUp