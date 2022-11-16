import React from 'react'
import Place from './Place.js'
import data from '../../data/images'

function Places() {
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
        <div>
            {image}
        </div>
    )
}

export default Places