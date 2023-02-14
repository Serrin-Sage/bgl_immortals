import SingleMerit from "./SingleMerit"

const StudentMerits = ({ studentDetails }) => {
  let merits = studentDetails.merit_array.merits
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