import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const whichUser = useSelector((state) => state.usertype.value)
  let userCode = whichUser.usertype === "instructor" ? "instructor_code" : "parent_code"

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
      console.log(res.error)
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={loginUser}>
          <input type="text" name="code" placeholder={`Enter ${whichUser.usertype} code`}/> 
          <br/>
          <input type="text" name="email" placeholder="Enter email" />
          <br/>
          <input type="password" name="password" placeholder="Enter password" />
          <br/>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default SignIn