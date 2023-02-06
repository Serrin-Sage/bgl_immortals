import StudentCard from "./StudentCard"

const StudentList = ({ studentList }) => {
  return (
    <div>
        {
            studentList.map((student) => {
                return (
                    <StudentCard student={student}/>
                )
            })
        }
    </div>
  )
}

export default StudentList