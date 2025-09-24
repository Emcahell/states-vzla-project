import React from "react";
import Icongh from "./icons/Icongh";
import IconX from "./icons/IconX";
import Iconig from "./icons/Iconig";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full py-6 border-t-2 border-t-wine-light bg-wine-dark">

      <section className="flex flex-col items-center justify-center tracking-wide text-center mb-2 text-white-smoke">
        <p className="text-sm">Desarrollado con ❤️ por <b>Emcahell</b></p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a className="m-1 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://github.com/emcahell">
            <Icongh />
          </a>
          <a className="m-1 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://www.linkedin.com/in/emmanuel-castro-b577aa34a?utm_source=share&utm_campsing=share_via&utm_content=profile&utm_medium=web">
            <IconX />
          </a>
          <a className="m-1 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://instagram.com/emcahell">
            <Iconig />
          </a>
        </div>
      </section>
      <section className="text-white-smoke mt-4 text-xs">
        <p>2025 | Estados Vzla</p>
      </section>

    </footer>
  )
}

export default Footer;