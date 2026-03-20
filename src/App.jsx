import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/tech-website/" element={<Home />} />
          <Route path="/tech-website/products" element={<Products />} />
          <Route path="/tech-website/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/tech-website/" replace />} />
          <Route path="*" element={<Navigate to="/tech-website/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
