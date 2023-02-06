import Header from "../main/Header"
import { useSelector } from "react-redux"
import { useState, useEffect} from "react"
import StudentList from "./StudentList"
import Merits from "../main/Merits"

const InstructorPage = () => {
  const currentUser = useSelector((state) => state.user.value)
  const [studentList, setStudentList] = useState([])
  const [showContent, setShowContent] = useState("Student List")
  // const [selectedCategory, setSelectedCategory] = useState("")

  console.log(currentUser)

  useEffect(() => {
    const getStudents = async () => {
      let req = await fetch(`http://localhost:3000/instructor_students/${currentUser.id}`)
      let res = await req.json()
      if (req.ok) {
        setStudentList(res)
      } else {
        console.log("NO STUDENTS FOUND")
      }
    }

    getStudents()
  },[])

  const selectContent = (clickedCategory) => {
    setShowContent(clickedCategory)
    // setSelectedCategory(clickedCategory)
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
          {showContent === "Details" ? <div>DETAILS</div>: null}
        </div>
        </div>
        
    </div>
  )
}

export default InstructorPage