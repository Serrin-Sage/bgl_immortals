import { useEffect } from "react"
import SingleMerit from "./SingleMerit"

const StudentMerits = ({ studentDetails }) => {
  let merits = studentDetails.merit_array.merits
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "src/features/hoverEffect.js";
    script.async = true;

    document.body.appendChild(script);
  },[])
  return (
    <div className="student-merit-list-container">
        <div className="student-merit-list">
            {
                merits.map((merit) => {
                    return (
                      <SingleMerit merit={merit}/>  
                    )
                })
            }
        </div>
    </div>
  )
}

export default StudentMerits