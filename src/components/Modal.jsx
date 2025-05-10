import React from "react";
import { useEffect, useState } from "react";
import IconChevronLeft from "./icons/IconChevronLeft";
import MinusBar from "./icons/MinusBar";

const Modal = ({ data, onClose }) => {
  if (!data) return null;
  const [isVisible, setIsVisible] = useState(false);
  const {bandera, escudo, mapa, estado, extension, poblacion, gentilicio, toponimia, ubicacion_limites, actividad_economica, parques} = data;

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); 
  };

  return (
    <section className={`fixed top-0 left-0 flex flex-col items-center w-screen h-screen text-wine bg-white-smoke overflow-y-scroll z-40 transition-opacity duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <article className="relative w-full bg-wine">
        <button onClick={handleClose}>
        <IconChevronLeft />
        </button>
        <img className="fixed top-0 w-full" src={data.bandera} alt={`Bandera de ${data.estado}`} />
      </article>
      <article className="relative top-46 md:top-70 w-full h-[170vh] p-5 bg-white-smoke rounded-4xl">
        <div className="flex justify-center w-full">
          <MinusBar />
        </div>
        <div className="mt-7 mb-3">
          <h1 className="capitalize font-bold tracking-wide text-2xl sm:text-3xl">Estado {data.estado}</h1>
        </div>
        <div className="flex justify-center gap-7 w-full p-5 mb-4 sm:overflow-hidden overflow-x-scroll">
          <div className="w-[350px] h-auto p-2 bg-white shadow-[0_0_5px] shadow-wine-light rounded-xl">
            <img className="w-[350px] rounded-xl" src={data.mapa} alt={`Mapa del estado ${data.estado}`} />
            <p className="font-family-cathedral tracking-wide text-sm text-wine mt-2">Ubicación de {data.estado}</p>
          </div>
          <div className="flex flex-col justify-between w-auto h-auto p-3 bg-white shadow-[0_0_5px] shadow-wine-light rounded-xl">
            <img className="w-[200px] rounded-xl" src={data.escudo} alt={`Escudo del estado ${data.estado}`} />
            <p className="font-family-cathedral tracking-wide text-sm text-wine">Escudo de {data.estado}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <b className="text-lg sm:text-xl">Capital</b>
            <p className="tracking-wide mx-2">{data.capital}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Extención</b>
            <p className="tracking-wide mx-2">{data.extension} km²</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Población</b>
            <p className="tracking-wide mx-2">{data.poblacion}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Gentilicio</b>
            <p className="tracking-wide mx-2">{data.gentilicio}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Toponimia</b>
            <p className="tracking-wide mx-2">{data.toponimia}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Ubicación</b>
            <p className="tracking-wide mx-2">{data.ubicacion_limites}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Actividad Económica</b>
            <p className="tracking-wide mx-2">{data.actividad_economica}</p>
          </div>
          <div>
            <b className="text-lg sm:text-xl">Parques Nacionales</b>
            <p className="tracking-wide mx-2">{data.parques}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Modal;