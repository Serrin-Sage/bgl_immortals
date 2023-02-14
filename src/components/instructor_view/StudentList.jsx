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

  const orderByNumber = (number) => {
    const sortFunctions = {
      age: (a, b) => b.age - a.age,
      level: (a, b) => b.level - a.level,
    };
    const sortedArray = [...studentList].sort(sortFunctions[number]);
    dispatch(createList(sortedArray));
  }

  const orderByWord = (word) => {
    const sortFunctions = {
      name: (a,b) => {if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0;},
      guardian: (a, b) => { if (a.user < b.user) return -1; if (a.user > b.user) return 1; return 0; },
      house: (a, b) => { if (a.immortal_house < b.immortal_house) return -1; if (a.immortal_house > b.immortal_house) return 1; return 0; }
    }
    let sortedArray = [...studentList].sort(sortFunctions[word])
    console.log(sortedArray)
    dispatch(createList(sortedArray))
  }

  return (
    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th onClick={() => orderByWord("name")}>Name</th>
            <th onClick={() => orderByWord("guardian")}>Guardian</th>
            <th onClick={() => orderByNumber("age")}>Age</th>
            <th onClick={() => orderByWord("house")}>House</th>
            <th onClick={() => orderByNumber("level")}>Level</th>
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
      <button onClick={() => setShowStudentForm(true)} className="add-btn">Add Student</button>
      {showStudentForm ? <NewStudentForm setShowStudentForm={setShowStudentForm}/> : null }
      {showMerits ? <ViewMerits setShowMerits={setShowMerits}/> : null}
    </div>
  )
}

export default StudentList