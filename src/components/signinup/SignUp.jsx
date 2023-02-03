import { useSelector } from "react-redux"

const SignUp = () => {
  const whichUser = useSelector((state) => state.usertype.value)
  console.log(whichUser.usertype)
  return (
    <div>
      <div>
        <form>
          
        </form>
      </div>
    </div>
  )
}

export default SignUp