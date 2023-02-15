import About from "./About"
import Immortals from "./Immortals"
import Merits from "./Merits"
import Games from "./Games"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MainContent = () => {
    const [showContent, setShowContent] = useState("About")
    const [selectedCategory, setSelectedCategory] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if (selectedCategory === "") navigate("/home")
    }, [selectedCategory])


    const selectContent = (clickedCategory) => {
        setShowContent(clickedCategory)
        setSelectedCategory(clickedCategory)
        // history.pushState(clickedCategory, '', `/home/${clickedCategory}`)
    }
    
    return (
        <div className="main-content-container">
            <div className="main-content-tabs">
                <div className="content-tab" id={showContent === "About" ? "active-tab" : "inactive"} onClick={() => selectContent("About")}>
                    About
                </div>
                <div className="content-tab" id={showContent === "Endless" ? "active-tab" : "inactive"} onClick={() => selectContent("Endless")}>
                    The Houses
                </div>
                <div className="content-tab" id={showContent === "Merits" ? "active-tab" : "inactive"} onClick={() => selectContent("Merits")}>
                    Merits
                </div>
                <div className="content-tab" id={showContent === "Games" ? "active-tab" : "inactive"} onClick={() => selectContent("Games")}>
                    Games
                </div>
                {/* <div className="content-tab">
                    Test
                </div> */}
            </div>
            <div className="main-content">
                {showContent === "About" ? <About /> : null }
                {showContent === "Endless" ? <Immortals /> : null }
                {showContent === "Merits" ? <Merits /> : null }
                {showContent === "Games" ? <Games /> : null }
            </div>
        </div>
    )
}

export default MainContent