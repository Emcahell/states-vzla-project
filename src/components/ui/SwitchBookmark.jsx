import React, { useEffect, useState } from 'react';

const Switch = ({estadoData}) => {
  const [isSaved, setIsSaved] = useState(false);
  const storageKey = 'guardados';

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem(storageKey)) || [];
    const found = guardados.find(item => item.estado === estadoData.estado);
    setIsSaved(!!found);
  }, [estadoData.estado]);

  const toggleSaved = () => {
    const guardados = JSON.parse(localStorage.getItem(storageKey)) || [];

    if (isSaved) {
      // Quitar de guardados
      const nuevos = guardados.filter(item => item.estado !== estadoData.estado);
      localStorage.setItem(storageKey, JSON.stringify(nuevos));
      setIsSaved(false);
    } else {
      // Agregar a guardados
      const nuevos = [...guardados, estadoData];
      localStorage.setItem(storageKey, JSON.stringify(nuevos));
      setIsSaved(true);
    }
  };

  return (

    <button
    onClick={toggleSaved}
    className="absolute top-0 right-0 flex items-center justify-center w-[45px] h-[45px] cursor-pointer z-10"
    aria-label="Guardar estado"
  >
    <svg
      width={15}
      viewBox="0 0 50 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svgIcon ${isSaved ? 'active' : ''}`}
    >
      <path
        d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
        stroke="black"
        strokeWidth={7}
      />
    </svg>
  </button>

      // <label htmlFor={`bookmark-${estadoData.estado}`} className="absolute top-0 right-0 flex items-center justify-center w-[45px] h-[45px] cursor-pointer">
      //   <input 
      //   type="checkbox" 
      //   id={`bookmark-${estadoData.estado}`}
      //   checked={isSaved}
      //   onChange={toggleSaved}
      //   style={{ display: 'none' }}
      //   />
      //   <svg width={15} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgIcon">
      //     <path d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z" stroke="black" strokeWidth={7} />
      //   </svg>
      // </label>
  );
}

export default Switch;
