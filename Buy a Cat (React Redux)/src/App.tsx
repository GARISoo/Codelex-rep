import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Cart from './pages/cart/cart';
import Catalog from './pages/catalog/catalog';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default App;
