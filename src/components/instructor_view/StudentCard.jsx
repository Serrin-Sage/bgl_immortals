import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeFromList } from "../../features/studentList"
import { selectStudent } from "../../features/student"
import AssignHouse from "./AssignHouse"
const StudentCard = ({ student, setShowMerits }) => {
    const dispatch = useDispatch()

    const [showOptions, setShowOptions] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showAssignHouse, setShowAssignHouse] = useState(false)
    const [studentLevel, setStudentLevel] = useState(student.level)
    const levels = [
        {level: 0, range: [0,2]},
        {level: 1, range: [3,6]},
        {level: 2, range: [7,11]},
        {level: 3, range: [12,18]},
        {level: 4, range: [19,25]},
        {level: 5, range: [26,32]},
        {level: 6, range: [33,39]},
        {level: 7, range: [50,47]},
        {level: 8, range: [48,56]},
        {level: 9, range: [57,66]},
        {level: 10, range: [67,77]},
        {level: 11, range: [78,89]},
        {level: 12, range: [90,111]},
    ]
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
                <div className="option-btn" id="delete-btn" onClick={() => deleteStudent(student)}>
                    Delete
                </div>
            </div>
        )
    }

    const UpdateStudent = () => {
        return (
            <div className="update-container" onMouseOver={() => setShowUpdate(true)} onMouseOut={() => setShowUpdate(false)}>
                {showUpdate ? 
                    <img src="src\images\update.png" className="update-image" onClick={() => updateMerits()}/>
                :
                    null
                }
            </div>
        )
    }
    
    const updateMerits = async() => {
        let meritTotal = student.merit_array.merits.length;
        let testTotal = 0
        for (const level of levels) {
            if (meritTotal >= level.range[0] && meritTotal <= level.range[1]) {
                setStudentLevel(level.level);
                testTotal = level.level
                break;
            }
        }
        let req = await fetch(`http://localhost:3000/update_level/${student.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                level: testTotal
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
        setShowOptions(false)
        setShowAssignHouse(false)
    }

    return (
        <tr onMouseLeave={() => removePopUps()} onClick={() => dispatch(selectStudent(student))}>
           <td onClick={handleClick}>{student.name}</td>
           <td>{student.user === null ? "------" : student.user.name}</td>
           <td>{student.age}</td>
           <td onClick={() => setShowAssignHouse(true)}>{student.immortal_house}</td>
           <td>{studentLevel}</td>
           <td onClick={() => setShowMerits(true)}>VIEW</td>
           
            {showOptions ? <Options /> : null}
            {showAssignHouse ? <AssignHouse setShowAssignHouse={setShowAssignHouse} student={student}/> : null}
            <UpdateStudent />

        </tr>
    )
}

export default StudentCard