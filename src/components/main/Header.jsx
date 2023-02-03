import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getLinkType } from "../../features/linkType"
import { loginStatus } from "../../features/loginStatus"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const checkStatus = useSelector((state) => state.status.value)

  const handleLogout = () => {
    dispatch(loginStatus({ loggedIn: false }))
    navigate("/home")
  }

  return (
    <div className="header-container">
      <Link to="/home" className="header-item">
        <img src="src/images/GameLabLogo-small.png" className="bgl-logo" alt="header-logo" />
      </Link >
      <div className="header-item">

      </div>
      <div className="header-item">
        {checkStatus.loggedIn ? 
          <div className="link-container">
            <a href="https://brooklyngamelab.com/" target="_blank" className="header-link-text">Main Site</a>
            <Link className="header-link-text">Profile</Link>
            <div className="header-link-text" onClick={handleLogout}>Logout</div>
          </div> 
          : 
          <div className="link-container">
            <a href="https://brooklyngamelab.com/" target="_blank" className="header-link-text">Main Site</a>
            <Link to="/student_or_instructor" className="header-link-text" onClick={() => { dispatch(getLinkType({ type: "Register" })) }}>Register</Link>
            <Link to="/student_or_instructor" className="header-link-text" onClick={() => { dispatch(getLinkType({ type: "Login" })) }}>Login</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header