import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Pricing from './Pricing';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import '../css.file/globalStyles.css';

const noShellRoutes = ['/login', '/signup', '/dashboard'];

function Layout() {
  const location = useLocation();
  const isShell = !noShellRoutes.includes(location.pathname);

  return (
    <>
      {isShell && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {isShell && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
