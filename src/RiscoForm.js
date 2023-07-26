import React, { useState } from 'react';
import './styles.css'; // Importar el archivo de estilos personalizados

// Componente personalizado para el cuadro de texto
const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type="number"
        className="form-input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Componente personalizado para el botón
const Button = ({ label, onClick }) => {
  return (
    <button type="button" className="form-btn" onClick={onClick}>
      {label}
    </button>
  );
};

const RiscoForm = ({ onSubmit }) => {
  const [caloriasMinimas, setCaloriasMinimas] = useState(0);
  const [pesoMaximo, setPesoMaximo] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(caloriasMinimas, pesoMaximo);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <TextInput
        label="Calorías Mínimas:"
        value={caloriasMinimas}
        onChange={(e) => setCaloriasMinimas(parseInt(e.target.value))}
      />
      <TextInput
        label="Peso Máximo:"
        value={pesoMaximo}
        onChange={(e) => setPesoMaximo(parseInt(e.target.value))}
      />
      <Button label="Calcular" onClick={handleSubmit} />
    </form>
  );
};

export default RiscoForm;
