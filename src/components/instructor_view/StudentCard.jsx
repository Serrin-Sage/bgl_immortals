import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeFromList } from "../../features/studentList"
import { selectStudent } from "../../features/student"
import AssignHouse from "./AssignHouse"
import UpdateAge from "./UpdateAge"
const StudentCard = ({ student, setShowMerits }) => {
    const dispatch = useDispatch()
    
    const [showDelete, setShowDelete] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showAssignHouse, setShowAssignHouse] = useState(false)
    const [showAgeUpdate, setShowAgeUpdate] = useState(false)
    const [studentLevel, setStudentLevel] = useState(student.level)
    const [studentHouse, setStudentHouse] = useState(student.immortal_house)
    const levels = [
        {level: 0, range: [0,2]},
        {level: 1, range: [3,6]},
        {level: 2, range: [7,11]},
        {level: 3, range: [12,18]},
        {level: 4, range: [19,25]},
        {level: 5, range: [26,32]},
        {level: 6, range: [33,39]},
        {level: 7, range: [40,47]},
        {level: 8, range: [48,56]},
        {level: 9, range: [57,66]},
        {level: 10, range: [67,77]},
        {level: 11, range: [78,89]},
        {level: 12, range: [90,111]},
    ]

    const handleClick = (e) => {
        e.preventDefault()
        setShowDelete(true)
    }

    const deleteStudent = async (clickedStudent) => {
        dispatch(removeFromList(clickedStudent.id))
        let req = await fetch(`http://localhost:3000/students/${clickedStudent.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                user_id: clickedStudent.id,
            })
        })
        if (req.ok) {
            console.log("Student Deleted")
        }
    }

    const Delete = () => {
        return (
            <div className="option-container">
                <div className="option-btn" id="delete-btn" onClick={() => setShowConfirm(true)}>
                    Delete
                </div>
            </div>
        )
    }

    const ConfirmDelete = () => {
        return (
            <div className="confirm-container">
                <div className="option-btn" id="confirm-delete" onClick={() => deleteStudent(student)}>
                    Confirm?
                </div>
            </div>
        )
    }

    const UpdateStudent = () => {
        return (
            <div className="update-container" onMouseOver={() => setShowUpdate(true)} onMouseOut={() => setShowUpdate(false)}>
                {showUpdate ? 
                    <img src="src\images\update.png" className="update-image" onClick={updateMerits}/>
                :
                    null
                }
            </div>
        )
    }
    
    const updateMerits = async () => {
        let newLevel = 0
        let meritTotal = student.merit_array.merits.length;
        for (const level of levels) {
            if (meritTotal >= level.range[0] && meritTotal <= level.range[1]) {
                setStudentLevel(level.level);
                newLevel = level.level
                break;
            }
        }
        let req = await fetch(`http://localhost:3000/update_level/${student.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                level: newLevel
            })
        })
        let res =  req.json()
        if (req.ok) {
            console.log(res)
        } else {
            console.log(res.error)
        }
    }

    const removePopUps = () => {
        setShowDelete(false)
        setShowAssignHouse(false)
        setShowConfirm(false)
        setShowAgeUpdate(false)
    }

    return (
        <tr onMouseLeave={() => removePopUps()} onClick={() => dispatch(selectStudent(student))}>
           <td onClick={handleClick}>{student.name}</td>
           <td id="pronouns">{student.pronoun}</td>
           <td>{student.user === null ? "------" : student.user.name}</td>
           <td onClick={() => setShowAgeUpdate(true)}>{student.age}</td>
           <td onClick={() => setShowAssignHouse(true)}>{studentHouse}</td>
           <td>{studentLevel}</td>
           <td onClick={() => setShowMerits(true)}>VIEW</td>
           
            {showDelete ? <Delete /> : null}
            {showConfirm ? <ConfirmDelete /> : null}
            {showAssignHouse ? <AssignHouse setShowAssignHouse={setShowAssignHouse} student={student} setStudentHouse={setStudentHouse}/> : null}
            {showAgeUpdate ? <UpdateAge setShowAgeUpdate={setShowAgeUpdate} student={student}/> : null}
            <UpdateStudent />

        </tr>
    )
}

export default StudentCard