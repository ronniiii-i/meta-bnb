import stars from '../../img/stars.png'

function Place({ link }) {
  return (
    <div className='card'>
        <div className="image">
            <img src={link} alt="Location" />
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