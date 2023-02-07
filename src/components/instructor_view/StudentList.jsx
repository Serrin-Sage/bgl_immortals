import StudentCard from "./StudentCard"

const StudentList = ({ studentList }) => {
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
    </div>
  )
}

export default StudentList