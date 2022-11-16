import more from '../../img/more.png'

function More() {
    return (
        <section id="more" className="flex justify-between align-center full-width">
            <div className="text flex column align-start">
                <h2>Metabnb NFTs</h2>
                <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>Learn More</button>
            </div>
            <div className="image">
                <img src={more} alt="Learn More" />
            </div>
        </section>
    )
}

export default More
