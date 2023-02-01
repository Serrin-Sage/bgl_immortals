import { useState, useEffect } from "react"
import MeritDisplay from "./MeritDisplay"
import ScrollButton from "../../features/ScrollButton"
const Merits = () => {
    const [allMerits, setAllMerits] = useState([])

    let characterMerits = []
    let designMerits = []

    useEffect(() => {
        const fetchMerits = async () => {
            let req = await fetch("http://localhost:3000/merits")
            let res = await req.json()
            if (req.ok) {
                setAllMerits(res)
            } else {
                console.log("Merits not found")
            }
        }
        fetchMerits()
    },[])

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    characterMerits = allMerits.filter((merit) => {
        return merit.category === "character"
    })
    designMerits = allMerits.filter((merit) => {
        return merit.category === "design"
    })

    return (
        <div className="merit-page-container">
            <div className="merit-page-navbar">
                <div className="navbar-tab" id="character-tab" onClick={() => scrollToSection("Character")}>Character</div>
                <div className="navbar-tab" id="design-tab" onClick={() => scrollToSection("Design")}>Desgin</div>
                <div className="navbar-tab" id="virtue-tab" onClick={() => scrollToSection("Virtue")}>Virtue</div>
                <div className="navbar-tab" id="tactical-tab" onClick={() => scrollToSection("Tactical")}>Tactical</div>
                <div className="navbar-tab" id="dedication-tab" onClick={() => scrollToSection("Dedication")}>Dedication</div>
                <div className="navbar-tab" id="research-tab" onClick={() => scrollToSection("Research")}>Research</div>
                <div className="navbar-tab" id="victory-tab" onClick={() => scrollToSection("Victory")}>Victory</div>
                <div className="navbar-tab" id="experience-tab" onClick={() => scrollToSection("Experience")}>Experience</div>
            </div>
            <div className="merit-page-content">
                <MeritDisplay meritArray={characterMerits} meritCategory="Character" id="Character"/>
                <MeritDisplay meritArray={designMerits} meritCategory="Design" id="Desgin"/>
            </div>
            <ScrollButton />
        </div>
    )
}

export default Merits