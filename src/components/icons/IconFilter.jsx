import React from "react";
import { useEffect, useState, useRef } from "react";

const IconFilter = ({setSortOption}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOptionClick = (option) => {
    setSortOption(option);
    setOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<div className="absolute top-0 right-0 flex items-center p-3 rounded-tr-lg rounded-br-lg cursor-pointer bg-wine-light" ref={menuRef}>
    <button onClick={() => setOpen(!open)}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      color="#552834"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
      </svg>
    </button>

    {open && (
        <ul className="absolute top-0 right-0 flex flex-col items-center mt-14 py-2 w-48 bg-white border border-wine-light rounded-lg shadow-lg text-wine z-10">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg w-[90%] text-left" onClick={() => handleOptionClick("az")}>A - Z</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg w-[90%] text-left" onClick={() => handleOptionClick("za")}>Z - A</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg w-[90%] text-left" onClick={() => handleOptionClick("mayor")}>Mayor extensión</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg w-[90%] text-left" onClick={() => handleOptionClick("menor")}>Menor extensión</li>
        </ul>
      )}
</div>
  )
}

export default IconFilter;