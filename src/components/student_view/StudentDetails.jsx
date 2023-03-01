import { useSelector } from "react-redux"

const StudentDetails = ({ studentDetails }) => {

  const currentUser = useSelector((state) => state.user.value)
  let meritTotal = studentDetails.merit_array.merits.length
  return (
    <div className="student-details-container">
      <div className="student-details-content">
        <h1>{studentDetails.name}</h1>
        <h2>House: {studentDetails.immortal_house}</h2>
        <div className="profile-info-names">
          <p>Guardian: {currentUser.name}</p> 
          <p>Email: {currentUser.email}</p> 
        </div>
        <div className="profile-level">
          <div>
            <h2>You are Level:</h2>
            <h1>{studentDetails.level}</h1>
          </div>
          <div>
            <h2>You have:</h2>
            <h1>{meritTotal} Merits</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails