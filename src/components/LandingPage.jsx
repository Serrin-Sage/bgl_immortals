import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div className="landing-page-container">
      <div className="logo-container" id="main-logo-container" onClick={() => handleClick()}>
        <img src="src/images/GameLabLogo-clear.png" alt="BGL LOGO" id="main-logo"/>
      </div>
      <div className="">
        <img src="src/images/Redmoon-solid.png" alt="Redmoon Logo" id="redmoon-logo"/>
      </div>
      <div className="">
        <img src="src/images/Dyre-solid.png" alt="Redmoon Logo" id="dyre-logo"/>
      </div>
      <div className="">
        <img src="src/images/Oakfist-solid.png" alt="Oakfist Logo" id="oakfist-logo"/>
      </div>
      <div className="">
        <img src="src/images/Parchwik-solid.png" alt="Parchwik Logo" id="parchwik-logo"/>
      </div>
      <div className="">
        <img src="src/images/Irongate-solid.png" alt="Irongate Logo" id="irongate-logo"/>
      </div>
    </div>
  )
}

export default LandingPage