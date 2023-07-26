import React from 'react';

const RiscoResults = ({ elementosSeleccionados }) => {
  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      {elementosSeleccionados.length > 0 ? (
        <ul>
          {elementosSeleccionados.map((elemento) => (
            <li key={elemento.id}>
              {elemento.name} - Calorías: {elemento.calories} - Peso: {elemento.weight}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron elementos que cumplan con los requisitos.</p>
      )}
    </div>
  );
};

export default RiscoResults;
