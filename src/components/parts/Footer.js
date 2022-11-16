import logo from '../../img/footerlogo.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'

function Footer() {
    return (
        <footer>
            <div id="details" className="flex justify-between align-stretch full-width wrap">
                <div className="column flex justify-between">
                    <a href="/">
                        <img src={logo} alt="Meta BnB" />
                    </a>
                    <div className="widgets flex justify-center align-center full-width">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
                <div className="column flex justify-between">
                    <strong>Community</strong>
                    <ul>
                        <li><a>NFT</a></li>
                        <li><a>Tokens</a></li>
                        <li><a>Landlords</a></li>
                        <li><a>Discord</a></li>
                    </ul>
                </div>
                <div className="column flex justify-between">
                    <strong>Places</strong>
                    <ul>
                        <li><a>Castle</a></li>
                        <li><a>Farms </a></li>
                        <li><a>Beach</a></li>
                        <li><a>Learn more</a></li>
                    </ul>
                </div>
                <div className="column flex justify-between">
                    <strong>About Us</strong>
                    <ul>
                        <li><a>Road map</a></li>
                        <li><a>Creators </a></li>
                        <li><a>Career</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2022 Metabnb</p>
        </footer>
    )
}

export default Footer