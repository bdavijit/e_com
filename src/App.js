import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
        <>
              <Header />
              <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='*' element={<Notfound />} />
              </Routes>
              <Footer />
        </>
  );
}

export default App;
