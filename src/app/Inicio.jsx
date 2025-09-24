import React from "react";
import Mapa from "../components/images/Mapa";
import CardImgPlace from "../components/ui/CardImgPlace";

// Import images for gallery
import ImgMedanos1 from "../components/images/gallery/ImgMedanos1";
import ImgRoraima1 from "../components/images/gallery/ImgRoraima1";
import ImgChoroni1 from "../components/images/gallery/ImgChoroni1";
import ImgRoques1 from "../components/images/gallery/ImgRoques1";
import ImgPico1 from "../components/images/gallery/ImgPico1";
import ImgLlanos1 from "../components/images/gallery/ImgLlanos1";
import ImgSaltoAngel1 from "../components/images/gallery/ImgSaltoAngel1";
import ImgPuenteUrdaneta1 from "../components/images/gallery/ImgPuenteUrdaneta1";
import ImgPuenteUrdaneta2 from "../components/images/gallery/ImgPuenteUrdaneta2";

const Inicio = () => {
  return(
    <section className="w-full h-full">
      <article className="flex justify-center items-center flex-col text-center my-18 mb-40">
        <div className="relative right-16 sm:right-28 text-left">
          <h1 className="text-3xl font-bold text-wine sm:text-6xl"> ESTADOS </h1>
          <span className="text-2xl font-bold text-wine sm:text-4xl">de</span>
        </div>
        <span className="relative left-3 sm:left-6 bottom-9 text-5xl font-family-cathedral sm:text-8xl">Venezuela</span>  
      </article>
      <article className="relative flex flex-col items-center w-full h-full rounded-t-4xl sm:rounded-t-[150px] bg-wine">
        <div className="relative flex justify-center w-full">
          <Mapa />
        </div>
        <div className="w-11/12 -mt-34 mb-20 text-white-smoke text-lg">
          <p className="tracking-wide my-2">
          🔍 Dirígete al icono de la lupa para ver todos los estados o buscar uno en específico.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:gap-4 w-[70%] h-full mb-20">
          <div className="w-full mb-6 text-center">
            <span className="w-full text-xl sm:text-3xl tracking-wide text-white-smoke font-family-cathedral"></span>
          </div>
          <div className="flex gap-2 sm:gap-4 w-full">
            <CardImgPlace className="w-[40%]">
              <ImgChoroni1 />
              <span className="absolute bottom-5 sm:bottom-7 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Aragua</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Playa Choroni</span>
            </CardImgPlace>
            <CardImgPlace className="w-[60%]">
              <ImgRoraima1 />
              <span className="absolute bottom-5 sm:bottom-7 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Bolívar</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Monte Roraima</span>
            </CardImgPlace>
          </div>
          <div className="flex gap-2 sm:gap-4 w-full">
            <CardImgPlace className="w-full">
              <ImgMedanos1 />
              <span className="absolute bottom-5 sm:bottom-7 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Falcón</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Medanos de Coro</span>
            </CardImgPlace>
          </div>
          <div className="flex gap-2 sm:gap-4 w-full">
            <CardImgPlace className="w-[60%]">
              <ImgRoques1 />
              <span className="absolute bottom-5 sm:bottom-7 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Dependencia Federal</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Los Roques</span>
            </CardImgPlace>
            <CardImgPlace className="w-[40%]">
              <ImgPico1 />
              <span className="absolute bottom-5 sm:bottom-7 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Merida</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Pico Bolívar</span>
            </CardImgPlace>
          </div>
          <div className="flex gap-2 sm:gap-4 w-full">
            <CardImgPlace className="w-[33.3%]">
              <ImgLlanos1 />
              <span className="absolute bottom-6 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Apure</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Llanos</span>
            </CardImgPlace>
            <CardImgPlace className="w-[33.3%]">
              <ImgSaltoAngel1 />
              <span className="absolute bottom-6 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Bolívar</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Salto Angel</span>
            </CardImgPlace>
            <CardImgPlace className="w-[33.3%]">
              <ImgPuenteUrdaneta2 />
              <ImgPuenteUrdaneta1 />
              <span className="absolute bottom-6 left-2 sm:left-4 text-white-smoke tracking-wide text-[10px] sm:text-xs">Zulia</span>
              <span className="absolute bottom-1 left-2 sm:left-4 text-white-smoke tracking-wide font-bold text-xs sm:text-sm">Pnte Urdaneta</span>
            </CardImgPlace>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Inicio;