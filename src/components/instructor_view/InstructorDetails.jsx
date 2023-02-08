import { useSelector } from "react-redux"

const InstructorDetails = () => {

  const currentUser = useSelector((state) => state.user.value)
  return (
    <div>
        {currentUser.name}
    </div>
  )
}

export default InstructorDetails