import React, { useState } from 'react'
import Main from './components/Main'
import PlaceToStay from './components/PlaceToStay'
import Header from './components/parts/Header'
import Footer from './components/parts/Footer'
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import close from './img/x.png'
import metamask from './img/metamas.png'
import wallet from './img/wallet.png'

function App() {
  const [isActive, setActive] = useState(false);

  const openMenu = () => {
    setActive(!isActive);
  }
  const closeMenu = () => {
    setActive(!isActive);
  }
  return (
    <section>
      <Header popupMenu={openMenu} />
      <section className={isActive ? "bg flex justify-center align-center" : "bg close"}>
        <div className="content">
          <div className="title flex justify-between align-center full-width">
            <strong>Connect Wallet</strong>
            <img src={close} alt="close" onClick={closeMenu} />
          </div>
          <div className="text flex column">
            <p>Choose your preferred wallet</p>
            <button className="flex justify-between align-center">
              <img src={metamask} alt="Metamask" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z" fill="#959DA6" />
              </svg>

            </button>
            <button className="flex justify-between align-center">
              <img src={wallet} alt="Metamask" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z" fill="#959DA6" />
              </svg>

            </button>
          </div>
        </div>
      </section>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/places-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Router>
      <Footer />
    </section>
  );
}

export default App;
