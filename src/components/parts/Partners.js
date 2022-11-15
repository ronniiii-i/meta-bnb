import mbtoken from '../../img/mbtoken.png'
import metamask from '../../img/metamask.png'
import opensea from '../../img/opensea.png'

function Partners() {
  return (
    <section className="flex justify-evenly">
        <img src={mbtoken} alt="MBToken" />
        <img src={metamask} alt="MetaMask" />
        <img src={opensea} alt="OpenSea" />
    </section>
  )
}

export default Partners