import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const ViewMerits = ({ setShowMerits }) => {
  const currentStudent = useSelector((state) => state.student.value)
  let merits = currentStudent.merit_array.merits
  let meritTotal = merits.length
  const [studentsMerits, setStudentsMerits] = useState(merits)
  const [searchMerits, setSearchMerits] = useState(false)
  const [allMerits, setAllMerits] = useState([])
  const [filteredMerits, setFilteredMerits] = useState([])
  const [contentLoaded, setContentLoaded] = useState(false)
  const [defaultView, setDefaultView] = useState(true)
  const [meritInput, setMeritInput] = useState("")
  const [meritsToAdd, setMeritsToAdd] = useState([])
  const [saveReminder, setSaveReminder] = useState(false)

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

    const confirmMeritSelection = () => {
        setStudentsMerits((prevState) => {
            return [...prevState, ...meritsToAdd]
        })
        setMeritsToAdd([])
        setSaveReminder(true)
        
    }

    const saveMeritSelection = async () => {
        let req = await fetch(`http://localhost:3000/students/${currentStudent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                merit: studentsMerits
            })
        })
        let res = await req.json()
        if (req.ok) {
            setShowMerits(false)
        } else {
            console.log(req.error)
        }
    }

  return (
    <div className="merit-view-container">
        <span className="exit-button" onClick={() => setShowMerits(false)}>X</span>
        <div className="students-merits">
            {studentsMerits.map((merit) => {
                return (
                    <div key={merit.id} className="view-image">
                        <img src={merit.image} className="view-merit-image"/>
                    </div>
                )
            })}
        </div>
        <div className="merit-view-title">
            <h2>{currentStudent.name}'s Merits</h2>
        </div>
        <div className="merit-total-title">
            <h2>Toal Merits: {meritTotal}</h2>
        </div>
        <button className="add-btn" onClick={() => setSearchMerits(true)}>Add Merits</button>
        <div className="add-merit-container" >
            {searchMerits ? 
                  <div className="all-merit-container" onMouseOver={() => setSaveReminder(false)}>
                    <input type="text" onChange={filterMerits} placeholder="Search for Merit..." className="search-merit-input"/>
                    <br/>
                    {defaultView ? 
                        <div className="merit-serach-results"> 
                            {allMerits.map((merit) => {
                                return (
                                    <div onClick={() => addMeritToStaging(merit)} className="merit-search-div">
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
                                    <div onClick={() => addMeritToStaging(merit)} className="merit-search-div">
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
                                    <div onClick={() => removeAddedMerit(merit)} className="merit-remove-div">
                                        {/* <p>{merit.name}</p> */}
                                        <img src={merit.image} style={{ maxWidth: 50 }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="add-btn" onClick={() => confirmMeritSelection()}>ADD</button>
                </div>
            }
              {saveReminder ? <div className="merits-to-add-container"><h1>Merits added, Click Save!</h1></div> : null}
        </div>
        <div>

            <button className="save-button" onClick={saveMeritSelection}>SAVE</button>
        </div>
    </div>
  )
}

export default ViewMerits