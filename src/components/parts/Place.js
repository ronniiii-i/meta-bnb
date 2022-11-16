import stars from '../../img/stars.png'

function Place({ link, text }) {
  return (
    <div>
        <div className="image">
            <img src={link} alt="Location" />
            <h1>{text}</h1>
        </div>
        <div className="details">
            <div className="flex justify-between align-center">
                <p>Desert King</p>
                <strong>1MBT per night</strong>
            </div>
            <div className="flex justify-between align-center">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
            </div>
            <img src={stars} alt="rating" />
        </div>
    </div>
  )
}

export default Place