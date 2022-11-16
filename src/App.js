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

function App() {
  return (
    <section>
      <Header /><Router>
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
