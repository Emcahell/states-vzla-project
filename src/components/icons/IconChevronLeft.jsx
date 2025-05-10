import React from "react";

const IconChevronLeft = () => {
  return (
  <div className="fixed top-0 left-0 flex justify-center items-center w-10 h-10 m-3.5 bg-white hover:bg-white-smoke rounded-full cursor-pointer z-50">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-tabler icons-tabler-outline icon-tabler-chevron-left"
    >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 6l-6 6l6 6" />
    </svg>
  </div>
  )
}

export default IconChevronLeft;