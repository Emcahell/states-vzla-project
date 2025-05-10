import React, { useState } from "react";
import fuzzaldrinPlus from "fuzzaldrin-plus";
import Modal from "../components/Modal";
import InputSearch from "../components/ui/InputSearch";
import CardState from "../components/ui/CardState";
import NoResults from "../components/ui/NoResults";
import data from "../data.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('az');
  const [selectedState, setSelectedState] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // search bar
  const customFilter = (data, searchTerm, key) => {
    if (searchTerm === "") {
      return data;
    } else {
      return fuzzaldrinPlus.filter(data, searchTerm, { key, maxResults: data.length });
    }
  };
  
  // search filter
  const handleFilter = (data, option) => {
    switch (option) {
      case 'az':
        return [...data].sort((a, b) => a.estado.localeCompare(b.estado));
      case 'za':
        return [...data].sort((a, b) => b.estado.localeCompare(a.estado));
      case 'mayor':
        return [...data].sort((a, b) => b.extension - a.extension);
      case 'menor':
        return [...data].sort((a, b) => a.extension - b.extension);
      default:
        return data;
    }
  };

  const filteredData = handleFilter(customFilter(data, searchTerm, "estado"), sortOption);

  // modal open closed
  const handleViewMore = (stateData) => {
    setSelectedState(stateData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedState(null);
  };

  return (
    <section className="flex flex-col items-center w-full h-full my-12">
      <article className="flex flex-col items-center w-[90%] mb-12">
        <h1 className="w-full mb-16 text-3xl text-left font-bold text-wine">Busca un estado</h1>
        <div className="w-full sm:w-[90%] mb-8">
          <InputSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          setSortOption={setSortOption}
          />
        </div>
      </article>
      <article className="flex flex-wrap justify-center items-center gap-8 w-[90%]">
        {filteredData.map((data, index) => (
          <CardState
          key={index} {...data} onViewMore={() => handleViewMore(data)}
          />
        ))}
        {filteredData.length === 0 && (
          <NoResults />
        )}
      </article>
      {showModal && selectedState && (
        <Modal 
        data={selectedState}
        onClose={closeModal} 
        />
      )}
    </section>
  )
}

export default Search;