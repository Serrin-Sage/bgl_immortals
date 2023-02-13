import { useState, useEffect } from "react"
import MeritDisplay from "./MeritDisplay"
import ScrollButton from "../../features/ScrollButton"
import LoadingContent from "../../features/LoadingContent"

const Merits = () => {
    const [allMerits, setAllMerits] = useState([])
    const [contentLoaded, setContentLoaded] = useState(false)

    let characterMerits = []
    let designMerits = []
    let virtueMerits = []
    let tacticalMerits = []
    let dedicationMerits = []
    let researchMerits = []
    let victoryMerits = []
    let experienceMerits = []

    useEffect(() => {
        const fetchMerits = async () => {
            let req = await fetch("http://localhost:3000/merits")
            let res = await req.json()
            if (req.ok) {
                setAllMerits(res)
                setContentLoaded(true)
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

    virtueMerits = allMerits.filter((merit) => {
        return merit.category === "virtue"
    })

    tacticalMerits = allMerits.filter((merit) => {
        return merit.category === "tactical"
    })

    dedicationMerits = allMerits.filter((merit) => {
        return merit.category === "dedication"
    })

    researchMerits = allMerits.filter((merit) => {
        return merit.category === "research"
    })

    victoryMerits = allMerits.filter((merit) => {
        return merit.category === "victory"
    })

    experienceMerits = allMerits.filter((merit) => {
        return merit.category === "experience"
    })

    return (
        <div className="merit-page-container">
            {contentLoaded ? 
                <>
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
                        <MeritDisplay meritArray={virtueMerits} meritCategory="Virtue" id="Virtue"/>
                        <MeritDisplay meritArray={tacticalMerits} meritCategory="Tactical" id="Tactical"/>
                        <MeritDisplay meritArray={dedicationMerits} meritCategory="Dedication" id="Dedication"/>
                        <MeritDisplay meritArray={researchMerits} meritCategory="Research" id="Research"/>
                        <MeritDisplay meritArray={victoryMerits} meritCategory="Victory" id="Victory"/>
                        <MeritDisplay meritArray={experienceMerits} meritCategory="Experience" id="Experience"/>
                    </div>
                    <ScrollButton />
                </>
                :
                <LoadingContent />
            }
        </div>
    )
}

export default Merits