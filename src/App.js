import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
