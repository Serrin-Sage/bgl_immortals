import { useSelector } from "react-redux"

const SignUp = () => {
  const whichUser = useSelector((state) => state.usertype.value)
  let postFocus = whichUser.usertype === "instructor" ? "instructors" : "users"
  const createUser = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/${postFocus}`)
  }
  return (
    <div className="signinup-page-container">
      <div className="signinup-content">
        <h1>Sign Up</h1>
        <form onSubmit={createUser}>
          <input type="text" name="code" placeholder={`Enter ${whichUser.usertype} code`} className="user-input"  />
          <br />
          <br />
          <input type="text" name="name" placeholder="Enter Full Name" className="user-input" />
          {whichUser.usertype === "parent" ? 
            <>
              <input type="text" name="child-name" placeholder="Enter Child's Full Name" className="user-input"/> 
              <br/>
              <br/>
            </>
            : null
          }
          <input type="text" name="email" placeholder="Enter Email" className="user-input" />
          <br/>
          <br/>
          <input type="password" name="password" placeholder="Create Password" className="user-input" />
          <input type="password" name="confirm-password" placeholder="Confirm password" className="user-input" />
          <br/>
          <br/>
          <input type="text" name="username" placeholder="Create username (optional)" className="user-input" />

        </form>
      </div>
    </div>
  )
}

export default SignUp