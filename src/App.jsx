import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import FloatingShape from './components/FloatingShape';
import Login from './components/Login';
import Login2 from './components/Login2';
function App() {
  return (
    <Router className="">
      <FloatingShape />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black ">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login2" element={<Login2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;