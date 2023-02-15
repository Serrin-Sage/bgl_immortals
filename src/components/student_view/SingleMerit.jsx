import { useState } from "react"

const SingleMerit = ({ merit }) => {

  const [hoverOver, setHoverOver] = useState(false)
  return (
        <div key={merit.id} className="student-merit-container" onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
          <div className="student-merit-image" id={merit.color}>
              <img src={merit.image} className="student-merit" />
          </div>
          {hoverOver ? <div className="hover-text">{merit.name}</div> : null}
      </div>
  )
}

export default SingleMerit