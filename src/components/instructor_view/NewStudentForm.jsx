import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const NewStudentForm = ({ setShowStudentForm }) => {
    const currentUser = useSelector((state) => state.user.value)

    const [generatedNum, setGeneratedNum] = useState("")
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const generateCode = (e) => {
        e.preventDefault()
        let num = Math.floor(Math.random() * 90000) + 10000
        setGeneratedNum(num)
    }

    const createNewStudent = async (e) => {
        e.preventDefault()
        if (e.target.code.value === "") {
            setShowError(true)
            setErrorMessage("Code must be filled")
            return
        }
        let studentreq = await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                age: e.target.age.value,
                immortal_house: "None",
                level: 0,
                merit_array: [],
                instructor_id: currentUser.id,
                number: generatedNum
            })
        })
        let studentres = await studentreq.json()
        if (studentreq.ok) {
            console.log(studentres)
        } else {
            console.log(studentres.error)
        }    
    }

    return (
    <div className="student-form-container">
        <div className="student-form">
            <span onClick={() => setShowStudentForm(false)} className="exit-button">X</span>
            <br/>
            <form onSubmit={createNewStudent}>
                <input type="text" name="name" placeholder="Enter Students Name"/>
                <br/>
                <br/>
                <input type="number" name="age" placeholder="Enter Students Age" />
                <br/>
                <br/>
                <button onClick={generateCode}>Generate Parent Code</button>
                <br/>
                <input type="text" value={generatedNum} name="code" onChange={(e) => setGeneratedNum(e.target.value)}/>
                <br/>
                <br/>
                <p>{showError ? `${errorMessage}` : null}</p>
                <input type="submit" value="Create New Student" />

            </form>
        </div>
    </div>
  )
}

export default NewStudentForm