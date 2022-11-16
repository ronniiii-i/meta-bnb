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
                <select name="location" id="location">
                    <option value="Resturant"></option>
                    <option value="Cottage"></option>
                    <option value="Castle"></option>
                    <option value="fantast city"></option>
                    <option value="beach"></option>
                    <option value="Carbins"></option>
                    <option value="Off-grid"></option>
                    <option value="Farm"></option>
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