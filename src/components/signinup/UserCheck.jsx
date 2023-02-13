import { useSelector, useDispatch } from "react-redux"
import { changeUserType } from "../../features/userType"

import { useNavigate } from "react-router-dom"

const UserCheck = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const linkType = useSelector((state) => state.link.value)

  const userSelect = ( selectedUser ) => {
    dispatch(changeUserType({ usertype: selectedUser }))
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
            
            <div className="user-select" id="parent-student-select" onClick={() => userSelect("parent")}>
              <p className="user-select-text">Parent/Student?</p>
            </div>
            <div className="page-break">

            </div>
              <div className="user-select" id="instructor-select" onClick={() => userSelect("instructor")}>
                <p className="user-select-text">Instructor/Manager?</p>
            </div>
        </div>
    </div>
  )
}

export default UserCheck