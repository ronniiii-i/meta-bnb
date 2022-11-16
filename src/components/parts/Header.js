import logo from '../../img/logo.png'

function Nav({ popupMenu, sideMenu, isActive }) {
  return (
    <header className="flex justify-center align-center full-width">
      <a className="logo" href="/">
        <img src={logo} alt="Meta BnB" />
      </a>
      <div className="wrapper flex justify-between align-center">
        <nav className={isActive ? "fixed" : null}>
          <ul className="flex justify-center">
            <li><a href="/">Home</a></li>
            <li><a href="/places-to-stay">Place to Stay</a></li>
            <li><a href="/">NFTs</a></li>
            <li><a href="/">Community</a></li>
          </ul>
        </nav>
        <button onClick={popupMenu}>Connect wallet</button>
      </div>
      <div class={isActive ? "burger open flex column justify-between" : "burger flex column justify-between"} onClick={sideMenu}>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>
    </header>
  )
}

export default Nav
