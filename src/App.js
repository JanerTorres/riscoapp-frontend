import React, { useState } from 'react';
import RiscoForm from './RiscoForm';
import RiscoResults from './RiscoResults';
import axios from 'axios';

const App = () => {
  const [elementosSeleccionados, setElementosSeleccionados] = useState([]); 

  const handleFormSubmit = (caloriasMinimas, pesoMaximo) => {
    axios.get("http://localhost:8080/riscoapp/element/find?weight="+ pesoMaximo +"&calories="+ caloriasMinimas)
      .then((response) => {
        setElementosSeleccionados(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los resultados:', error);
      });
  };

  return (
    <div>
      <h1>Funcionalidad de Risco</h1>
      <RiscoForm onSubmit={handleFormSubmit} />
      <RiscoResults elementosSeleccionados={elementosSeleccionados} />
    </div>
  );
};

export default App;
