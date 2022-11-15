import hero from '../../img/hero.png'

function Hero() {
    return (
        <section id="hero" className="flex justify-between align-center full-width">
            <div className="text flex column">
                <h1>
                    Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span>
                </h1>
                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
                <div className="search flex justify-center">
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