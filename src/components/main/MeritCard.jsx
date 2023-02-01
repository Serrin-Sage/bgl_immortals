import { useState } from "react"

const MeritCard = ({merit}) => {

  const [hoverOver, setHoverOver] = useState(false)

  return (
      <div className="merit-content">
          <div className="merit-image-container" id={merit.color} onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
              <img src={merit.image} alt="image of merit" className="merit-image" />
              {hoverOver ? <div className="hover-text">{merit.name}</div> : null}
          </div>
          <div className="merit-description" id={`${merit.color}-description`}>
              <div className="div-arrow" id={`${merit.color}-arrow`}></div>
              <p className="merit-text">{merit.description}</p>
          </div>
      </div>
  )
}

export default MeritCard