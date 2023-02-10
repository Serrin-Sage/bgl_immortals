import { useState } from "react"

const SingleMerit = ({ merit }) => {

  const [hoverOver, setHoverOver] = useState(false)
  return (
      <div key={merit.id} className="student-merit-container" id={merit.color} onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
          <img src={merit.image} className="student-merit" />
          {hoverOver ? <div className="hover-text">{merit.name}</div> : null}
      </div>
  )
}

export default SingleMerit