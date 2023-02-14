import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { editList } from "../../features/studentList"

const NewStudentForm = ({ setShowStudentForm }) => {
    const currentUser = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
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
        let req = await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                age: e.target.age.value,
                immortal_house: "None",
                level: 0,
                merit_array: {merits: []},
                instructor_id: currentUser.id,
                number: generatedNum
            })
        })
        let res = await req.json()
        if (req.ok) {
            console.log("success")
            dispatch(editList(res))
            setShowStudentForm(false)
        } else {
            setShowError(true)
            setErrorMessage(res.error)
        }    
    }

    return (
    <div className="student-form-container">
        <div className="student-form" onFocus={() => setShowError(false)}>
            <span onClick={() => setShowStudentForm(false)} className="exit-button">X</span>
            <br/>
            <h1 className="new-student-title">New Student Form</h1>
            <form onSubmit={createNewStudent}>
                <input type="text" name="name" placeholder="Enter Students Name" className="user-input" id="student-form-input"/>
                <br/>
                <br/>
                    <input type="number" name="age" placeholder="Enter Students Age" className="user-input" id="student-form-input" />
                <br/>
                <br/>
                <button onClick={generateCode} className="code-gen-button">Generate Parent Code</button>
                <br/>
                    <input type="text" value={generatedNum} name="code" onChange={(e) => setGeneratedNum(e.target.value)} className="user-input" id="student-form-input" />
                <br/>
                <br/>
                <input type="submit" value="Create New Student" className="add-btn" id="add-student-btn"/>
            </form>
                {showError ? <div className="new-student-error">{errorMessage}</div> : <div className="new-student-error-blank"></div>}
        </div>
    </div>
  )
}

export default NewStudentForm