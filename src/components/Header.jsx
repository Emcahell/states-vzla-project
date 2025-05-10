import React, {useEffect, useState} from "react";
import IconHome from "./icons/IconHome";
import IconSearch from "./icons/IconSearch";
import IconBookmark from "./icons/IconBookmark";

const Header = () => {

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
      <nav className={`fixed flex justify-around items-center w-11/12 p-4 mt-2 rounded-2xl text-wine bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] z-30  ${showNav ? '' : 'nav-off'}`}>

        <a href="#" className="link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10">
          <IconHome />
          <span className="link-title font-semibold tracking-wide hidden sm:block">Inicio</span>
        </a>

        <a href="#" className="link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10">
          <IconSearch />
          <span className="link-title font-semibold tracking-wide hidden sm:block">Buscar</span>
        </a>

        <a href="#" className="link-section relative inline-flex justify-evenly items-center gap-2 py-2 px-4 rounded-3xl overflow-hidden cursor-pointer z-10">
          <IconBookmark />
          <span className="link-title font-semibold tracking-wide hidden sm:block">Guardado</span>
        </a>

      </nav>
    </header>
  );
}

export default Header;