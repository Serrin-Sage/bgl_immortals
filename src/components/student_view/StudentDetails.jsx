import { useSelector } from "react-redux"

const StudentDetails = ({ studentDetails }) => {

  const currentUser = useSelector((state) => state.user.value)

  return (
    <div className="student-details-container">
      <div className="student-details-content">
        <h1>{studentDetails.name}</h1>
        <h2>{studentDetails.immortal_house}</h2>
        <div className="profile-info-names">
          <p>Guardian: {currentUser.name}</p> 
          <p>Email: {currentUser.email}</p> 
        </div>
        <div className="profile-level">
          <h2>You are Level:</h2>
          <h1>{studentDetails.level}</h1>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails