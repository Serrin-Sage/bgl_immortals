import Header from "../main/Header"
import { useSelector, useDispatch } from "react-redux"
import { loginStatus } from "../../features/loginStatus"
import { login } from "../../features/user"
import { changeUserType } from "../../features/userType"
import Cookies from 'js-cookie'
import { useState, useEffect} from "react"
import StudentList from "./StudentList"
import Merits from "../main/Merits"
import InstructorDetails from "./InstructorDetails"

const InstructorPage = () => {
  const currentUser = useSelector((state) => state.user.value)
  const whichUser = useSelector((state) => state.usertype.value)
  const [studentList, setStudentList] = useState([])
  const [showContent, setShowContent] = useState("Student List")

  const dispatch = useDispatch()

  useEffect(() => {
    const getStudents = async (user) => {
      let req = await fetch(`http://localhost:3000/instructor_students/${user.id}`)
      let res = await req.json()
      if (req.ok) {
        setStudentList(res)
      } else {
        console.log("NO STUDENTS FOUND")
      }
    }

    const loadUser = async () => {
      let req = await fetch('http://localhost:3000/instructor_me', {
        headers: { Authorization: Cookies.get('token') }
      })
      let res = await req.json()
      if (req.ok) {
        dispatch(loginStatus({ loggedIn: true }))
        dispatch(login(res.user))
        dispatch(changeUserType({ usertype: res.user_type }))
        getStudents(res.user)
      }
    }
    if (Cookies.get('token')) {
      loadUser()
    }
  },[])

  const selectContent = (clickedCategory) => {
    setShowContent(clickedCategory)
  }

  return (
    <div>
        <Header />
        <div className="instructor-page-container">
          <div className="instructor-tabs">
          <div className="content-tab" id={showContent === "Student List" ? "active-tab" : "inactive"} onClick={() => selectContent("Student List")}>
              Student List
            </div>
          <div className="content-tab" id={showContent === "Merits" ? "active-tab" : "inactive"} onClick={() => selectContent("Merits")}>
              Merits
            </div>
          <div className="content-tab" id={showContent === "Levels" ? "active-tab" : "inactive"} onClick={() => selectContent("Levels")}>
              Levels
            </div>
          <div className="content-tab" id={showContent === "Details" ? "active-tab" : "inactive"} onClick={() => selectContent("Details")}>
              Profile Details
            </div>
          </div>
        <div className="instrcutor-page-content">
          {showContent === "Student List" ? <StudentList studentList={studentList}/> : null}
          {showContent === "Levels" ? <div>LEVELS</div> : null}
          {showContent === "Merits" ? <Merits /> : null}
          {showContent === "Details" ? <InstructorDetails />: null}
        </div>
        </div>
        
    </div>
  )
}

export default InstructorPage