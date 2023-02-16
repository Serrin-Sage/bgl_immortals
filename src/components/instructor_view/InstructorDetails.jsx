import { useSelector } from "react-redux"

const InstructorDetails = () => {

  const currentUser = useSelector((state) => state.user.value)
  return (
    <div className="instructor-details-container">
      <div className="instructor-details-content">
        <div className="instructor-details">
          <h1>{currentUser.name}</h1>
          <br/>
          <h3>Email: {currentUser.email}</h3>
          <br/>
          <h3>Username: {currentUser.username}</h3>
        </div>

      </div>
    </div>
  )
}

export default InstructorDetails