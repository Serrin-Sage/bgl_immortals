import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"
import { changeUserType } from "../../features/userType"
import Cookies from 'js-cookie'
import Header from "../main/Header"
import StudentDetails from "./StudentDetails"
import Merits from "../main/Merits"

const StudentPage = () => {
  const dispatch = useDispatch()
  const [studentDetails, setStudentDetails] = useState([])
  const [showContent, setShowContent] = useState("Your Merits")

  useEffect(() => {
    const getStudent = async (user) =>  {
      let req = await fetch(`http://localhost:3000/child_info/${user.id}`)
      let res = await req.json()
      if (req.ok) {
        setStudentDetails(res[0])
      } else {
        console.log(res.error)
      }
    }
    const loadUser = async () => {
      let req = await fetch('http://localhost:3000/parent_me', {
        headers: {Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (req.ok) {
        dispatch(loginStatus({ loggedIn: true }))
        dispatch(login(res.user))
        dispatch(changeUserType({ usertype: res.user_type }))
        getStudent(res.user)
      }
    }
    if (Cookies.get('token')) {
      loadUser()
    }
  },[])

  return (
    <div>
      <Header />
      <div className="student-page-container">
        <div className="house-display">
          <div className="house-image-div">
            <img src={`src/images/${studentDetails.immortal_house}Logo.png`} className="house-image"/>
          </div>
          <div>
            <StudentDetails studentDetails={studentDetails}/>
          </div>
        </div>
        <div className="student-page-content-container">
          <div className="instructor-tabs">
            <div className="content-tab" id={showContent === "Your Merits" ? "active-tab" : "inactive"} onClick={() => setShowContent("Your Merits")}>
              Your Merits
            </div>
            <div className="content-tab" id={showContent === "Achievements" ? "active-tab" : "inactive"} onClick={() => setShowContent("Achievements")}>
              Your Achievements
            </div>
            <div className="content-tab" id={showContent === "Merits" ? "active-tab" : "inactive"} onClick={() => setShowContent("Merits")}>
              Merits
            </div>
          </div>
          <div className="student-page-content">
            {/* {showContent === "Your Merits" ? <StudentList studentList={studentList} /> : null} */}
            {/* {showContent === "Levels" ? <div>LEVELS</div> : null} */}
            {showContent === "Merits" ? <Merits /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPage