import logo from '../../img/logo.png'

function Nav({ popupMenu }) {
  return (
    <header className="flex justify-center align-center full-width">
      <a className="logo" href="/">
        <img src={logo} alt="Meta BnB" />
      </a>
      <nav>
        <ul className="flex justify-center">
          <li><a href="/">Home</a></li>
          <li><a href="/places-to-stay">Place to Stay</a></li>
          <li><a href="/">NFTs</a></li>
          <li><a href="/">Community</a></li>
        </ul>
      </nav>
      <button onClick={popupMenu}>Connect wallet</button>
    </header>
  )
}

export default Nav
