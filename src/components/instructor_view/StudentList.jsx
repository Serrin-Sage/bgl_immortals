import StudentCard from "./StudentCard"
import NewStudentForm from "./NewStudentForm"
import ViewMerits from "./ViewMerits"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const StudentList = () => {
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [showMerits, setShowMerits] = useState(false)

  const studentList = useSelector((state) => state.list.value)

  const [allMerits, setAllMerits] = useState([])

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
  }, [])

  return (
    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Guardian</th>
            <th>Age</th>
            <th>House</th>
            <th>Level</th>
            <th>Merits</th>
          </tr>
        </thead>
        <tbody>
          {
              studentList.map((student) => {
                  return (
                    <StudentCard student={student} key={student.id} setShowMerits={setShowMerits}/>
                  )
              })
          }
        </tbody>
      </table>
      <br/>
      <button onClick={() => setShowStudentForm(true)}>Add Student</button>
      {showStudentForm ? <NewStudentForm setShowStudentForm={setShowStudentForm}/> : null }
      {showMerits ? <ViewMerits /> : null}
    </div>
  )
}

export default StudentList