import About from "./About"
import Immortals from "./Immortals"
import Merits from "./Merits"
import Games from "./Games"

import { useState } from "react"

const MainContent = () => {
    const [showContent, setShowContent] = useState("About")

    const selectContent = (clickedCategory) => {
        setShowContent(clickedCategory)
        history.pushState(clickedCategory, '', `/home/${clickedCategory}`)
    }
    
    return (
        <div className="main-content-container">
            <div className="main-content-tabs">
                <div className="content-tab" onClick={() => selectContent("About")}>
                    About
                </div>
                <div className="content-tab" onClick={() => selectContent("Immortals")}>
                    The Immortals
                </div>
                <div className="content-tab" onClick={() => selectContent("Merits")}>
                    Merits
                </div>
                <div className="content-tab" onClick={() => selectContent("Games")}>
                    Games
                </div>
                {/* <div className="content-tab">
                    Test
                </div> */}
            </div>
            <div>
                {showContent === "About" ? <About /> : null }
                {showContent === "Immortals" ? <Immortals /> : null }
                {showContent === "Merits" ? <Merits /> : null }
                {showContent === "Games" ? <Games /> : null }
            </div>
        </div>
    )
}

export default MainContent