import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './app/Inicio'
import Search from "./app/Search";
import Saved from "./app/Saved";

function App() {

  return (
    <Router>
      <main className='flex flex-col items-center justify-start min-h-screen font-family-roboto'>
        <Header />
        <div className="w-full flex-1 transition-opacity duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  )
}

export default App
