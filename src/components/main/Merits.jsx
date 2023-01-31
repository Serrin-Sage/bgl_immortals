import { useState, useEffect } from "react"
import MeritDisplay from "./MeritDisplay"

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

    characterMerits = allMerits.filter((merit) => {
        return merit.category === "character"
    })
    designMerits = allMerits.filter((merit) => {
        return merit.category === "design"
    })

    return (
        <div className="merit-page-container">
            Merit Page
            <div className="merit-page-content">
                <MeritDisplay meritArray={characterMerits} />
                <MeritDisplay meritArray={designMerits} />
            </div>
        </div>
    )
}

export default Merits