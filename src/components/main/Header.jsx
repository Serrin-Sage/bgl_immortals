import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getLinkType } from "../../features/linkType"

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div className="header-container">
      <div className="header-item">
        <img src="src/images/GameLabLogo-small.png" className="bgl-logo" alt="header-logo" />
      </div>
      <div className="header-item">

      </div>
      <div className="header-item">
        <div className="link-container">
          <a href= "https://brooklyngamelab.com/" target="_blank" className="header-link-text">Main Site</a>
          <Link to="/student_or_instructor" className="header-link-text" onClick={() => {dispatch(getLinkType({type: "Register"}))}}>Register</Link>
          <Link to="/student_or_instructor" className="header-link-text" onClick={() => { dispatch(getLinkType({ type: "Login" })) }}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header