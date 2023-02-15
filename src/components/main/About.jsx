import { useSelector } from "react-redux"
import LoadingContent from "../../features/LoadingContent"
import { Link } from "react-router-dom"
const About = () => {
    
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1 className="about-page-title">Welcome to the Flatiron Game Center!</h1>
                <hr></hr>
                <div className="about-page-description">
                    <p>Flatiron Game Center is a community for learning and creativity.<br/>
                        Our mission is to teach children critical thinking, patience, problem solving and cooperation through Board Games.
                    </p>

                    <p>Students can be signed up for FGC on the main webiste, linked <a href="https://brooklyngamelab.com/" target="_blank" className="header-link-text">here!</a></p>
                    <p>This website is used by students enrolled in the program and instructors/managers running the program.</p>

                    <div>
                        <h2 className="how-it-works">How it works...</h2>
                        <p>Once you're signed up for FGC you will be sent a unique code used for signing into this website!<br/>
                            Keep this code secret it's special to each user!
                        </p>
                        <p>While attending FGC you will recieve special merits based on your activity and participation in the Game Center<br/>
                            You can get merits for Game Center participation, positive soical interaction, trying something new, building your own creative ideas, and many more!<br/>
                            There are merits for almost any occassion, look at all the merits to find out which ones you could get.<br/>
                        </p>
                        <p>Once you get a certain number of merits you will level up!<br/>
                            Your first level will be achieved after obtaining 3 merits.<br/>
                            The only way to level up is get more merits.<br/>
                            After getting a total of 40 merits, you will be placed in one of the five FGC houses!
                        </p>
                        <div className="about-immotal-houses">
                            <div className="about-house-content">
                                <div className="about-page-icon">
                                    <img src="src\images\JavaScriptLogo.png" alt="image of Parchwik" className="about-image" />
                                </div>
                            </div>
                            <div className="about-house-content">
                                <div className="about-page-icon">
                                    <img src="src\images\ReactLogo.png" alt="image of Irongate" className="about-image" />
                                </div>
                            </div>
                            <div className="about-house-content">
                                <div className="about-page-icon">
                                    <img src="src\images\RubyLogo.png" alt="image of Dyre" className="about-image" />
                                </div>
                            </div>
                            <div className="about-house-content">
                                <div className="about-page-icon">
                                    <img src="src\images\PythonLogo.png" alt="image of Redmoon" className="about-image" />
                                </div>
                            </div>
                            <div className="about-house-content">
                                <div className="about-page-icon">
                                    <img src="src\images\BorgLogo.png" alt="image of Oakfist" className="about-image" />
                                </div>
                            </div>
                        </div>
                        <p>
                            To be placed you will need to take the House Placement Exam, which is done on location at the Flatiron Game Center.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About