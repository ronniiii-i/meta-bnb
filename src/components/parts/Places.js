import Place from './Place.js'
import data from '../../data/images'

function Places() {
    const image = data.slice(0, 8).map(item => {
        return (
            <Place
                key={`${Math.random() * 10380203040390}`}
                link={item.link}
                text={item.text}
            />
        )
    })
    return (
        <section className='place flex wrap justify-center'>
            {image}
        </section>
    )
}

export default Places