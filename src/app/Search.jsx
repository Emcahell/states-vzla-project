import React, { useState } from "react";
import fuzzaldrinPlus from "fuzzaldrin-plus";
import InputSearch from "../components/ui/InputSearch";
import CardState from "../components/ui/CardState";
import NoResults from "../components/ui/NoResults";
import data from "../data.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customFilter = (data, searchTerm, key) => {
    if (searchTerm === "") {
      return data;
    } else {
      return fuzzaldrinPlus.filter(data, searchTerm, { key, maxResults: data.length });
    }
  };
  
  const filteredData = customFilter(data, searchTerm, "estado");  

  return (
    <section className="flex flex-col items-center w-full h-full my-12">
      <article className="flex flex-col items-center w-[90%] mb-12">
        <h1 className="w-full mb-16 text-3xl text-left font-bold text-wine">Busca un estado</h1>
        <div className="w-full sm:w-[90%] mb-8">
          <InputSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </article>
      <article className="flex flex-wrap justify-center items-center gap-8 w-[90%]">
        {filteredData.map((item, index) => (
          <CardState
          key={index}
          bandera={item.bandera}
          estado={item.estado}
          capital={item.capital}
          extencion={item.extension}
          poblacion={item.poblacion}
          />
        ))}
        {filteredData.length === 0 && (
          <NoResults />
        )}
      </article>
    </section>
  )
}

export default Search;