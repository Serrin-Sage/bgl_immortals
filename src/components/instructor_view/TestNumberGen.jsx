import { useState, useEffect } from "react"

const TestNumberGen = () => {
 
  const [generatedNum, setGeneratedNum] = useState("")
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const clickButton = (e) => {
    e.preventDefault()
    let num = Math.floor(Math.random() * 90000) + 10000;
    setGeneratedNum(num)
  }
  return (
    <div className="code-gen-container">
        <p>{generatedNum}</p>
        <button onClick={clickButton}>GENERATE A NUMBER</button>
        <p>{showError ? "ERROR" : ""}</p>
    </div>
  )
}

export default TestNumberGen