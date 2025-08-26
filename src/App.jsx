import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { Routes } from 'react-router-dom';


const App = () => {
  return (
    
      <div className="body">
        <Header /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
   
  );
};

export default App;
