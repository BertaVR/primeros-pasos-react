import React from "react";

// Importamos nuestro componente Filter
import FilterContainer from "../containers/TodoFiltersContainer";
// Importamos la clase css
import "../styles/Filter.css";

const FilterOptions = () => {
  return (
    <select className="filtros">
      <FilterContainer filter="SHOW_ALL">
        {/* CHILDREN QUE SE PASA A FILTER */}
        {/* Los que pinta realmente es un <Filter /> */}
        {/* Al cuál le pasa un children que es el texto que hay entre las etiquetas */}
        VER TODAS
      </FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">
        {/* CHILDREN QUE SE PASA A FILTER */}
        VER ACTIVAS
      </FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">
        {/* CHILDREN QUE SE PASA A FILTER */}
        VER COMPLETADAS
      </FilterContainer>
    </select>
  );
};

export default FilterOptions;
