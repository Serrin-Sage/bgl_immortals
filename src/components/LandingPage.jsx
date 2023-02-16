import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <div className="landing-page-container">
      <div className="logo-container" id="main-logo-container" onClick={() => handleClick()}>
        <img src="src\images\MainLogo2Clear.png" alt="BGL LOGO" id="main-logo"/>
      </div>
      <div className="">
        <img src="src\images\PythonLogo.png" alt="Redmoon Logo" className='landing-page-logos' id="redmoon-logo"/>
      </div>
      <div className="">
        <img src="src\images\BorgLogo.png" alt="Redmoon Logo" className='landing-page-logos' id="dyre-logo"/>
      </div>
      <div className="">
        <img src="src\images\JavaScriptLogo.png" alt="Oakfist Logo" className='landing-page-logos' id="oakfist-logo"/>
      </div>
      <div className="">
        <img src="src\images\ReactLogo.png" alt="Parchwik Logo" className='landing-page-logos' id="parchwik-logo"/>
      </div>
      <div className="">
        <img src="src\images\RubyLogo.png" alt="Irongate Logo" className='landing-page-logos' id="irongate-logo"/>
      </div>
    </div>
  )
}

export default LandingPage