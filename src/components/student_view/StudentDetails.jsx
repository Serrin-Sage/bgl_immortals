import { useSelector } from "react-redux"

const StudentDetails = ({ studentDetails }) => {

  const currentUser = useSelector((state) => state.user.value)

  return (
    <div className="student-details-container">
        <h1>Profile</h1>
        <p>{studentDetails.name}</p>
        <p>{currentUser.name}</p>
    </div>
  )
}

export default StudentDetails