import StudentCard from "./StudentCard"
import NewStudentForm from "./NewStudentForm"
import { useState } from "react"

const StudentList = ({ studentList }) => {
  const [showStudentForm, setShowStudentForm] = useState(false)

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
                      <StudentCard student={student} key={student.id}/>
                  )
              })
          }
        </tbody>
      </table>
      <br/>
      <button onClick={() => setShowStudentForm(true)}>Add Student</button>
      {showStudentForm ? <NewStudentForm setShowStudentForm={setShowStudentForm}/> : null }
    </div>
  )
}

export default StudentList