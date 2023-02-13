import StudentCard from "./StudentCard"
import NewStudentForm from "./NewStudentForm"
import ViewMerits from "./ViewMerits"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createList } from "../../features/studentList"

const StudentList = () => {
  const dispatch = useDispatch()
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const [showMerits, setShowMerits] = useState(false)

  const studentList = useSelector((state) => state.list.value)

  const orderByAge = () => {
    let sortedArray = [...studentList].sort((a,b) => b.age - a.age)
    dispatch(createList(sortedArray))
  }

  const orderByName = () => {
    let sortedArray = [...studentList].sort((a,b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    console.log(sortedArray)
    dispatch(createList(sortedArray))
  }

  return (
    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th onClick={orderByName}>Name</th>
            <th>Guardian</th>
            <th onClick={orderByAge}>Age</th>
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
      {showMerits ? <ViewMerits setShowMerits={setShowMerits}/> : null}
    </div>
  )
}

export default StudentList