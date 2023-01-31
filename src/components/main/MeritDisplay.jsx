import MeritCard from "./MeritCard"

const MeritDisplay = ({ meritArray }) => {
  return (
    <div className="merit-list-container">
        {
            meritArray.map((merit) => {
                return (
                    <MeritCard merit={merit} />
                )
            })
        }

    </div>
  )
}

export default MeritDisplay