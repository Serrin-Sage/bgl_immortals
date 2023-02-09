import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeFromList } from "../../features/studentList"
const StudentCard = ({ student }) => {
    const dispatch = useDispatch()

    const [showOptions, setShowOptions] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShowOptions(true)
    }

    const deleteStudent = (clickedStudent) => {
        dispatch(removeFromList(clickedStudent.id))
        console.log(clickedStudent)
        // let req = await fetch(`http://localhost:3000/students/${clickedStudent.id}`, {
        //     method: "DELETE"
        // })
        // if (req.ok) {
            
        //     console.log("Student Deleted")
        // }
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