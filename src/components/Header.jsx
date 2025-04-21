import React from "react";
import IconHome from "./icons/IconHome";
import IconSearch from "./icons/IconSearch";
import IconBookmark from "./icons/IconBookmark";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full h-20">
      <nav className="flex justify-around items-center w-11/12 p-4 mt-2 rounded-2xl text-wine bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">

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