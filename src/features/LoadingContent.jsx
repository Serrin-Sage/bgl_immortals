const LoadingContent = ({ size }) => {
  return (
    <div>
        <div className="ring">
            {/* <img src='800px-Five-pointed_star.svg.png' className='star'/> */}
            <div className='center-dot'></div>
            <div className="dot dot--one"></div>
            <div className="dot dot--two"></div>
            <div className="dot dot--three"></div>
            <div className="dot dot--four"></div>
            <div className="dot dot--five"></div>
        </div>
    </div>
  )
}

export default LoadingContent