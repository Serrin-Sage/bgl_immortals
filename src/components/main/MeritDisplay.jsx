import MeritCard from "./MeritCard"

const MeritDisplay = ({ meritArray }) => {
  return (
    <div className="merit-list-container">
        {
            meritArray.map((merit) => {
                return (
                    <div className="merit-content">
                        <div className="merit-image-container" id={merit.color}>
                            <img src={merit.image} alt="image of merit" className="merit-image"/>
                        </div>
                        <div className="merit-description" id={`${merit.color}-description`}>
                            <p className="merit-text">{merit.description}</p>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default MeritDisplay