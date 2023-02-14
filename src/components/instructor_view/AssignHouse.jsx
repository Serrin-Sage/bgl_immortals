const AssignHouse = ({ setShowAssignHouse, student, setStudentHouse }) => {

  const assignStudentToHouse = async (houseSelection) => {
      let req = await fetch(`http://localhost:3000/assign_house/${student.id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            house: houseSelection
        })
      })
      let res = await req.json()
      if (req.ok) {
        console.log(res)
        setStudentHouse(houseSelection)
        setShowAssignHouse(false)
      } else {
        console.log(res.error)
      }
  }

  return (
    <div className="house-selection-container" >
        <div className="house-selection">
              <img src="src\images\JavaScriptLogo.png" alt="JavScript Juggernauts" onClick={() => assignStudentToHouse("JavaScript")}/>
              <img src="src\images\ReactLogo.png" alt="React Raiders" onClick={() => assignStudentToHouse("React")} />
              <img src="src\images\RubyLogo.png" alt="Ruby Renegades" onClick={() => assignStudentToHouse("Ruby")} />
              <img src="src\images\PythonLogo.png" alt="Python Pioneers" onClick={() => assignStudentToHouse("Python")} />
              <img src="src\images\BorgLogo.png" alt="Borg Battalion" onClick={() => assignStudentToHouse("Borg")} />
        </div>
        <div className="house-select-arrow up">

        </div>
    </div>
  )
}

export default AssignHouse