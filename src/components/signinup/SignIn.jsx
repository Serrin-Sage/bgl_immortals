import { useSelector } from "react-redux"

const SignIn = () => {
  const whichUser = useSelector((state) => state.usertype.value)
  console.log(whichUser.usertype)

  const loginUser = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/${whichUser.usertype}_login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        instructor_code: e.target.code.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    })
    let res = await req.json()
    if (req.ok) {
      console.log(res)
    }
    else {
      console.log("ERROR, UNABLE TO SIGN IN")
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