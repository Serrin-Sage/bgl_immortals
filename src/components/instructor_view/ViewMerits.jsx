import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const ViewMerits = ({ setShowMerits }) => {
  const currentStudent = useSelector((state) => state.student.value)
  let merits = currentStudent.merit_array.merits
  const [studentsMerits, setStudentsMerits] = useState(merits)
  const [searchMerits, setSearchMerits] = useState(false)
  const [allMerits, setAllMerits] = useState([])
  const [filteredMerits, setFilteredMerits] = useState([])
  const [contentLoaded, setContentLoaded] = useState(false)
  const [defaultView, setDefaultView] = useState(true)
  const [meritInput, setMeritInput] = useState("")
  const [meritsToAdd, setMeritsToAdd] = useState([])

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
    }, [])

  const filterMerits = (event) => {
    const searchMerit = event.target.value
    setMeritInput(searchMerit)
    setDefaultView(false)
    const newFilter = allMerits.filter((value) => {
        return value.name.toLowerCase().includes(searchMerit.toLowerCase())
    })

    if (searchMerit === "") {
        setFilteredMerits(allMerits)
    } else {
        setFilteredMerits(newFilter)
    }

    const clearInput = () => {
        setFilteredMerits([])
        setMeritInput("")
    }
  }

    const addMeritToStaging = (addedMerit) => {
        setMeritsToAdd((prevState) => {
            return [...prevState, addedMerit]
        })
    }

    const removeAddedMerit = (merit) => {
        setMeritsToAdd((prevState) => {
            return [...prevState.filter((meritToRemove) => {
                return meritToRemove.id !== merit.id
            })]
        })
    }

    const confirmMeritSelection = async () => {
        setStudentsMerits((prevState) => {
            return [...prevState, ...meritsToAdd]
        })
        let req = await fetch(`http://localhost:3000/students/${currentStudent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                merit_array: {merits: studentsMerits}
            })
        })
        let res = await req.json()
        if (req.ok) {
            console.log(studentsMerits)
            setMeritsToAdd([])
            console.log(res)
        } else {
            console.log(req.error)
        }
    }

  return (
    <div className="merit-view-container">
        <span onClick={() => setShowMerits(false)}>X</span>
        <div className="students-merits">
            {studentsMerits.map((merit) => {
                return (
                    <div key={merit.id} className="view-image">
                        <img src={merit.image} className="view-merit-image"/>
                    </div>
                )
            })}
        </div>
        <button className="add-merit-btn" onClick={() => setSearchMerits(true)}>Add Merits</button>
        {searchMerits ? 
            <div className="all-merit-container">
                <input type="text" onChange={filterMerits} placeholder="Search for Merit..."/>
                <br/>
                <br/>
                {defaultView ? 
                    <div className="merit-serach-results"> 
                        {allMerits.map((merit) => {
                            return (
                                <div onClick={() => addMeritToStaging(merit)}>
                                    {/* <p>{merit.name}</p> */}
                                    <img src={merit.image} style={{ maxWidth: 50 }} />
                                </div>
                            )
                        })}
                    </div>
                : null
                }
                {allMerits.length != 0 && (
                    <div className="merit-serach-results">
                        {filteredMerits.map((merit, key) => {
                            return (
                                <div onClick={() => addMeritToStaging(merit)}>
                                    {/* <p>{merit.name}</p> */}
                                    <img src={merit.image} style={{maxWidth: 50}}/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            :
            null
        }
        {meritsToAdd.length > 0 && 
            <div className="merits-to-add-container">
                <h1>Merits to be added</h1>
                <div className="merits-to-add-content">
                    {
                        meritsToAdd.map((merit) => {
                            return (
                                <div onClick={() => removeAddedMerit(merit)}>
                                    {/* <p>{merit.name}</p> */}
                                    <img src={merit.image} style={{ maxWidth: 50 }} />
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => confirmMeritSelection()}>Confirm</button>
            </div>
        }
    </div>
  )
}

export default ViewMerits