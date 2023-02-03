import { useSelector } from "react-redux"

const SignUp = () => {
  const whichUser = useSelector((state) => state.usertype.value)
  console.log(whichUser.usertype)
  return (
    <div>SignUp</div>
  )
}

export default SignUp