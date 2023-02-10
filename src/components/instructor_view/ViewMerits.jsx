import { useSelector } from "react-redux"

const ViewMerits = () => {
  const currentStudent = useSelector((state) => state.student.value)
  let merits = currentStudent.merit_array.merits
  console.log(merits)
  return (
    <div className="merit-view-container">
        {merits.map((merit) => {
            return (
                <div key={merit.id} className="view-image">
                    <img src={merit.image} className="view-merit-image"/>
                </div>
            )
        })}
    </div>
  )
}

export default ViewMerits