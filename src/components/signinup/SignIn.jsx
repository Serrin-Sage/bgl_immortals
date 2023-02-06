import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const whichUser = useSelector((state) => state.usertype.value)
  let userCode = whichUser.usertype === "instructor" ? "instructor_code" : "parent_code"

  const [showError, setShowError] = useState(false)
  
  const loginUser = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/${whichUser.usertype}_login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        [userCode]: e.target.code.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    })
    let res = await req.json()
    if (req.ok) {
      dispatch(loginStatus({ loggedIn: true }))
      dispatch(login(res))
      navigate(`/${whichUser.usertype}_page`)
    }
    else {
      setShowError(true)
      console.log(res.error)
    }
  }
  return (
    <div className="signinup-page-container">
      <div className="signinup-content">
        <h1>Sign In</h1>
        <form onSubmit={loginUser} onFocus={() => setShowError(false)}>
          <input type="text" name="code" placeholder={`${whichUser.usertype} code`} className="user-input"/>
          <br/>
          {/* <label>{` ${whichUser.usertype} code`}</label> */}
          <br/>
          <input type="text" name="email" placeholder="Email" className="user-input"/>
          <br/>
          <br/>
          <input type="password" name="password" placeholder="password" className="user-input" />
          <br/>
          <br/>
          <p className="error-message">{showError ? "Invalid Credentials" : ""}</p>
          <br/>
          <input type="submit" value="LOGIN" className="signinup-btn"/>
        </form>
      </div>
    </div>
  )
}

export default SignIn