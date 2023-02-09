import { useState } from "react"

const StudentCard = ({ student }) => {
    const [showOptions, setShowOptions] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShowOptions(true)
    }

    const deleteStudent = async (clickedStudent) => {
        let req = await fetch(`http://localhost:3000/students/${clickedStudent.id}`, {
            method: "DELETE"
        })
        let res = req.json()
        if (req.ok) {
            console.log("Student Deleted")
        }
    }

    const Options = () => {

        return (
            <div className="option-container">
                <div className="option-btn" id="edit-btn">
                    Edit
                </div>
                <div className="option-btn" id="delete-btn" onClick={() => deleteStudent(student)}>
                    Delete
                </div>
            </div>
        )
    }
    return (
        <tr onClick={handleClick} onMouseLeave={() => setShowOptions(false)}>
           <td>{student.name}</td>
           <td>{student.user === null ? "------" : student.user.name}</td>
           <td>{student.age}</td>
           <td>{student.immortal_house}</td>
           <td>{student.level}</td>
           <td>"MERITS"</td>
           
            {showOptions ? <Options /> : null}
        </tr>
    )
}

export default StudentCard