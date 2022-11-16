import Place from './parts/Place'
import data from '../data/images'
import filter from '../img/filter.png'

function PlaceToStay() {
    const image = data.map(item => {
        return (
            <Place
                key={`${Math.random() * 10380203040390}`}
                link={item.link}
                text={item.text}
            />
        )
    })
    return (
        <>
            <div className="location flex justify-center align-center full-width">
                <select>
                    <option value="Resturant">Resturant</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Castle">Castle</option>
                    <option value="fantast city">fantast city</option>
                    <option value="beach">beach</option>
                    <option value="Carbins">Carbins</option>
                    <option value="Off-grid">Off-grid</option>
                    <option value="Farm">Farm</option>
                </select>
                <div className="options">
                    <ul>
                        <li>Resturant</li>
                        <li>Cottage</li>
                        <li>Castle</li>
                        <li>fantast city</li>
                        <li>beach</li>
                        <li>Carbins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                </div>
                <img src={filter} alt="Filter" />
            </div>
            <section className='place flex wrap justify-center'>
                {image}
            </section>
        </>
    )
}

export default PlaceToStay