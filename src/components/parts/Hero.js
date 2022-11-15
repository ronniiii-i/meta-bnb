import hero from '../../img/hero.png'

function Hero() {
    return (
        <section>
            <div className="text">
                <h1>
                    Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span>
                </h1>
                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
                <div className="search">
                    <input type="text" placeholder='Search for location' />
                    <input type="button" value="Search" />
                </div>
            </div>
            <div className="image">
                <img src={hero} alt="Hero" />
            </div>
        </section>
    )
}

export default Hero