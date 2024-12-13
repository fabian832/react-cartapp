import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transaction from './Pages/Transaction';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Transaction' element={<Transaction />} />
      </Routes>
    </Router>
  );
}

export default App;
