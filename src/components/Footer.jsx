import React from "react";
import Icongh from "./icons/Icongh";
import IconX from "./icons/IconX";
import Iconig from "./icons/Iconig";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full py-14 border-t-2 border-wine bg-wine-dark">

      <section className="flex flex-col items-center justify-center tracking-wide text-center mb-5 text-white-smoke">
        <p className="text-sm">Desarrollado con ❤️ por <b>Emcahell</b></p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a className="m-2 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://github.com/emcahell">
            <Icongh />
          </a>
          <a className="m-2 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://x.com/kromwellykz">
            <IconX />
          </a>
          <a className="m-2 p-2 rounded-full bg-wine-light hover:bg-wine" href="https://instagram.com/kromwellykz">
            <Iconig />
          </a>
        </div>
      </section>
      <section className="text-white-smoke mt-4 text-sm">
        <p>© 2025 Emcahell - Estados vzla</p>
      </section>

    </footer>
  )
}

export default Footer;