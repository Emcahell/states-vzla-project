import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import CardState from "../components/ui/CardState";
import NoSaved from "../components/ui/NoSaved";

const Saved = () => {
  const [guardados, setGuardados] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("guardados")) || [];
    setGuardados(data);
  }, []);

  const handleViewMore = (stateData) => {
    setSelectedState(stateData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedState(null);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-full my-12">
      <h1 className="w-[90%] mb-16 text-3xl text-left font-bold text-wine">Estados Guardados</h1>
      <div className="flex flex-wrap justify-center w-full h-full gap-8">
        {guardados.length > 0 ? (
          guardados.map((data, index) => (
            <CardState 
            key={index} {...data} onViewMore={() => handleViewMore(data)}
            // key={item.estado}
            // state={item}
            // onViewMore={() => handleViewMore(item)}
            // bandera={item.bandera}
            // estado={item.estado}
            // capital={item.capital}
            // extension={item.extension}
            // poblacion={item.poblacion}
            />
          ))
        ) : (
          <NoSaved />
        )}
      </div>
      {showModal && selectedState && (
        <Modal 
        data={selectedState}
        onClose={closeModal} 
        />
      )}
    </section>
  )
}

export default Saved;