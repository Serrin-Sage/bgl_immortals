import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const UserCheck = () => {
  const navigate = useNavigate()
  const linkType = useSelector((state) => state.link.value)
  console.log(linkType.type)

  const userSelect = () => {
    if (linkType.type === "Register") {
        navigate("/signup")
    } else if (linkType.type === "Login"){
        navigate("/signin")
    }
  }
  return (
    <div className="user-check-container">
          <h1>Are you a...</h1>
        <div className="user-check-content">
            
            <div className="user-select" id="parent-student-select" onClick={userSelect}>
                Parent/Student?
            </div>
            <div className="page-break">

            </div>
              <div className="user-select" id="instructor-select" onClick={userSelect}>
                Instructor/Manager? 
            </div>
        </div>
    </div>
  )
}

export default UserCheck