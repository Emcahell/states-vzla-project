import { NavLink, useLocation } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import IconHome from "./icons/IconHome";
import IconSearch from "./icons/IconSearch";
import IconBookmark from "./icons/IconBookmark";

const Header = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: ocultar
        setShowNav(false);
      } else {
        // Scroll hacia arriba: mostrar
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (  
    <header className={'flex justify-center items-center w-full h-20'}>
      <nav className={`fixed flex justify-around items-center w-11/12 p-4 mt-2 rounded-2xl text-wine bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] z-30 transition-transform duration-300 ${showNav ? '' : 'nav-off'}`}>

        <NavLink to="/" className={({ isActive }) => `link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${isActive ? 'active' : ''}`}>
          <IconHome />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Inicio
          </span>
        </NavLink>

        {/* <a 
        onClick={() => setActivePage('inicio')}
        className={`link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${
            activePage === "inicio" ? "bg-wine-light text-wine" : ""
          }`}
      >
          <IconHome />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Inicio
          </span>
        </a> */}

        <NavLink to="/search" className={({ isActive }) => `link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${isActive ? 'active' : ''}`}>
          <IconSearch />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Buscar
          </span>
        </NavLink>

        {/* <a 
        onClick={() => setActivePage('search')}
        className={`link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${
          activePage === "search" ? "bg-wine-light text-wine" : ""
        }`}
      >
          <IconSearch />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Buscar
          </span>
        </a> */}


        <NavLink to="/saved" className={({ isActive }) => `link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${isActive ? 'active' : ''}`}>
          <IconBookmark />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Guardado
          </span>
        </NavLink>

        {/* <a 
        onClick={() => setActivePage('saved')}
        className={`link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10 ${
          activePage === "saved" ? "bg-wine-light text-wine" : ""
        }`}
      >      
          <IconBookmark />
          <span className="link-title font-semibold tracking-wide hidden sm:block">
            Guardado
          </span>
        </a> */}

      </nav>
    </header>
  );
}

export default Header;