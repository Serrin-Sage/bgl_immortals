import { Link } from "react-router-dom"

const Header = () => {

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
          <Link to="" className="header-link-text">Register</Link>
          <Link to="" className="header-link-text">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header