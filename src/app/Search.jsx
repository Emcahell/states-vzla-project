import React from "react";
import InputSearch from "../components/ui/InputSearch";
import CardState from "../components/ui/CardState";
import data from "../data.json";

const Search = () => {
  return (
    <section className="flex flex-col items-center w-full h-full my-12">
      <article className="flex flex-col items-center w-[90%] mb-12">
        <h1 className="w-full mb-16 text-3xl text-left font-bold text-wine">Busca un estado</h1>
        <div className="w-full sm:w-[90%] mb-8">
          <InputSearch />
        </div>
      </article>
      <article className="flex flex-wrap justify-center items-center gap-8 w-[90%]">
        {data.map((item, index) => (
          <CardState
          key={index}
          bandera={item.bandera}
          estado={item.estado}
          capital={item.capital}
          extencion={item.extension}
          poblacion={item.poblacion}
          />
        ))}
      </article>
    </section>
  )
}

export default Search;