const CardState = ({ bandera, estado, capital, extencion, poblacion }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[350px] h-auto p-4 border-none rounded-xl shadow-md bg-white">
      <div className="mb-4">
        <img 
        src={bandera} 
        alt={`Bandera de ${estado}`}
        className="w-[350px] rounded-xl object-cover"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl tracking-wide font-bold text-wine mb-2">{estado}</h1>
          <div className="flex flex-col text-base text-[#523e43]">
            <span className="tracking-wide mb-1"><b>Capital:</b> {capital}</span>
            <span className="tracking-wide mb-1"><b>Extención:</b> {extencion}</span>
            <span className="tracking-wide mb-1"><b>Población:</b> {poblacion}</span>
          </div>
      </div>
      <button className="w-full p-1.5 rounded-xl font-bold text-white-smoke bg-wine hover:bg-wine-dark cursor-pointer">Saber más</button>
    </div>
  )
}

export default CardState;