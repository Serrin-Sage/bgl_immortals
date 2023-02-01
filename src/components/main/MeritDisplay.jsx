import MeritCard from "./MeritCard"

const MeritDisplay = ({ meritArray, meritCategory }) => {
  return (
    <div className="merit-display">
      <h1 className="merit-category-title" id={meritCategory}>{meritCategory}</h1>
      <div className="merit-list-container">
          {
              meritArray.map((merit) => {
                  return (
                      <MeritCard merit={merit} />
                  )
              })
          }
        </div>
        <hr></hr>
    </div>
  )
}

export default MeritDisplay